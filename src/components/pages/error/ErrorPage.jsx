import React from 'react'
import { useNavigate } from 'react-router'

export default function ErrorPage() {
  const navigate = useNavigate()

  const clickHandle = () => {
    navigate("/")
  }

  return (
    <div>
      <h1>ErrorPage</h1>
      <br/>
      <button onClick={clickHandle}>Retourner à la page d'accueil</button>
    </div>
  )
}
