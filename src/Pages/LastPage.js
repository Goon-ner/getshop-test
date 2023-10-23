import React from 'react'
import '../styles/lastPage.css'
import '../styles/buttonClose.css'
import ButtonClose from '../Components/ButtonClose'

const LastPage = () => {
  return (
    <>
      <div className="last-page">
        <ButtonClose />
        <div className={'lp-frame'}>
          <h1 className={'lp-header'}>ЗАЯВКА ПРИНЯТА</h1>
          <p className={'lp-text'}>Держите ваш телефон под рукой.</p>
          <p className={'lp-text'}>Скоро с вами свяжется наш менеджер.</p>
        </div>
      </div>
    </>
  )
}

export default LastPage
