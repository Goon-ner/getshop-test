import React from 'react'
import qrcode from '../images/index 1.png'
import { useNavigate } from 'react-router-dom'

const FrameFirstPage = () => {
  const navigate = useNavigate()
  return (
    <div className="frame-first-page">
      <div className="ffp-header">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </div>
      <img src={qrcode} alt="qr" />
      <div className="ffp-text">Сканируйте QR-код или нажмите ОК</div>
      <button onClick={() => navigate('/second')}>OK</button>
    </div>
  )
}

export default FrameFirstPage
