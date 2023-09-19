import styles from './HangmanKeyboard.module.css'

const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const HangmanKeyboard = () => {
  return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem'
      }}> 
        {KEYS.map(key => {
          return ( 
            <button className={styles.btn} key={key}>{key}</button>
          ) 
        })}
      </div>
  )
}

export default HangmanKeyboard