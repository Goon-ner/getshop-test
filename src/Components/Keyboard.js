import React from 'react'

const Keyboard = ({ setNumber, setIsNumberValid }) => {
  const handleKeyboardClick = (value) => {
    value === 'clear'
      ? setNumber((prev) => prev.slice(0, -1), setIsNumberValid(true))
      : setNumber((prev) => prev + value)
  }

  const buttons = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
    { text: '8', value: '8' },
    { text: '9', value: '9' },
  ]

  return (
    <div className="keyboard">
      {buttons.map((button) => (
        <button
          key={button.value}
          onClick={() => handleKeyboardClick(button.value)}
        >
          {button.text}
        </button>
      ))}
      <button className={'clear'} onClick={() => handleKeyboardClick('clear')}>
        СТЕРЕТЬ
      </button>
      <button onClick={() => handleKeyboardClick('0')}>0</button>
    </div>
  )
}

export default Keyboard
