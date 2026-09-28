import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function OrderPage() {
  return (
    <div>
      <h1>Bonjour</h1>
      <br/>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  )
}
