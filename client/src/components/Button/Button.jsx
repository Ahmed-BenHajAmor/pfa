import React from 'react'
import './Button.css'
import { SigninApiCalls } from '../../apiCalls/signinApi'
import { useNavigate } from 'react-router'

function Button({children}) {
  const navigate = useNavigate()
  return (
    <button onClick={()=>SigninApiCalls.logout(navigate)} className='btn'>{children}</button>
  )
}

export default Button