import { useState } from "react"
import { useNavigate } from "react-router"

export default function LoginForm() {
    //state ((data) (variables))
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
  
    //comportement
    const handleSubmit = (event) =>{
      event.preventDefault()
      setInputValue("")
      navigate("/order")
    }
  
    const handleChange = (event) =>{
      setInputValue(event.target.value)
    }
  
    //render
    return( 
      <form onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
        <input
          type="text" 
          placeholder="Entrez votre prénom"
          required
          value={inputValue}
          onChange={handleChange}/>
        <button>Accédez à votre espace</button>
      </form>)
}