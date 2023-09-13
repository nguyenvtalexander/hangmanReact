import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanKeyboard from './components/HangmanKeyboard'
import HangmanWord from './components/HangmanWord'
import words from './wordList.json'


function App() {
  const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

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
      <HangmanDrawing/>
      <HangmanWord/>
      <HangmanKeyboard/>
    </div>
  )
}

export default App
