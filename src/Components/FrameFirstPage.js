import React, { useEffect, useState } from 'react'
import qrcode from '../images/index 1.png'
import { useNavigate } from 'react-router-dom'

const FrameFirstPage = () => {
  const navigate = useNavigate()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 5000)
  }, [])
  return isReady ? (
    <div className="frame-first-page">
      <div className="ffp-header">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </div>
      <img src={qrcode} alt="qr" />
      <div className="ffp-text">Сканируйте QR-код или нажмите ОК</div>
      <button onClick={() => navigate('/second')}>OK</button>
    </div>
  ) : (
    <div></div>
  )
}

export default FrameFirstPage
