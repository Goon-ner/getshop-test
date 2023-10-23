import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonClose = () => {
  const navigate = useNavigate()
  return <button onClick={() => navigate('/')} className="button-close" />
}

export default ButtonClose
