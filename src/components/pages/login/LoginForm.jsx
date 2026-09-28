import { useState } from "react"

export default function LoginForm() {
    //state ((data) (variables))
      const [inputValue, setInputValue] = useState("")
    
      //comportement
      const handleSubmit = (event) =>{
        event.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
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