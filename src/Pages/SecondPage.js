import React, { useState } from 'react'
import Keyboard from '../Components/Keyboard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/secondPage.css'
import '../styles/checkbox.css'
import '../styles/buttonClose.css'
import ButtonClose from '../Components/ButtonClose'

const SecondPage = () => {
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [number, setNumber] = useState('')
  const [isNumberValid, setIsNumberValid] = useState(true)

  const numVerify = () => {
    axios
      .get('http://apilayer.net/api/validate', {
        params: {
          access_key: '82272185dd3496fdb2078c71b35c966a',
          number: `${number}`,
          country_code: 'RU',
          format: '1',
        },
      })
      .then(function (response) {
        response.data.valid
          ? navigate('/last')
          : setIsNumberValid(response.data.valid)
      })
      .catch(function (error) {
        alert(error)
      })
  }

  return (
    <div className="second-page">
      <ButtonClose />
      <div className="sp-frame">
        <div className="sp-header">Введите ваш номер телефона</div>
        <h3 className={isNumberValid ? 'number' : 'invalid-number'}>
          +7{number}
        </h3>
        <div className="sp-text">
          И с вами свяжется наш менеджер для дальнейшей консультации
        </div>
        <Keyboard setNumber={setNumber} setIsNumberValid={setIsNumberValid} />
        {isNumberValid ? (
          <label className="check">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div>Согласие на обработку персональных данных</div>
          </label>
        ) : (
          <div className="invalid-text">НЕВЕРНО ВВЕДЕН НОМЕР</div>
        )}
        <button
          className="verify-button"
          disabled={!checked}
          onClick={() => numVerify()}
        >
          ПОДТВЕРДИТЬ НОМЕР
        </button>
      </div>
    </div>
  )
}

export default SecondPage
