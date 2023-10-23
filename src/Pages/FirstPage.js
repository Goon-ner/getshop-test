import React from 'react'
import Youtube from '../Components/Youtube'
import FrameFirstPage from '../Components/FrameFirstPage'
import '../styles/firstPage.css'

const FirstPage = () => {
  return (
    <div className="first-page">
      <Youtube videoId={'M7FIvfx5J10'} />
      <FrameFirstPage />
    </div>
  )
}

export default FirstPage
