const HangmanWord = () => {
  const word = 'test'
  const guessedLetters = ['l', 'e']
  return (
      <div 
        style={{
          display: 'flex',
          gap: '.25em',
          fontSize: '6rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontFamily: 'monospace'
        }}>
          {word.split('').map((char, idx) => (
            <span style={{ borderBottom: '.1em solid black'}} key={idx}>
              <span
                style={{
                  visibility: guessedLetters.includes(char)
                  ? 'visible'
                  : 'hidden'
                }}>
                  {char}
                </span>
            </span>
          ))}
        </div>
  )
}

export default HangmanWord
