import { useCallback, useEffect, useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanKeyboard from './components/HangmanKeyboard'
import HangmanWord from './components/HangmanWord'
import words from './wordList.json'


function App() {
  console.log('commit test')
  const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  ).length

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return
    
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => { 
      document.removeEventListener('keypress', handler) 
    }
  }, [guessedLetters])

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center'
      }}>
      <HangmanDrawing numberOfGuesses={incorrectGuesses} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <HangmanKeyboard />
      </div>
    </div>
  )
}

export default App
