import { useState } from "react"

export default function LoginForm() {
    //state ((data) (variables))
      const [prenom, setPrenom] = useState("")
    
      //comportement
      const handleSubmit = (event) =>{
        event.preventDefault()
        alert(prenom)
        setPrenom("")
      }
    
      const handleChange = (event) =>{
        setPrenom(event.target.value)
      }
    
      //render
      return(
        <div>
          <h1>Bienvenue chez nous !</h1>
          <h2>Connectez-vous</h2>
          <form onSubmit={handleSubmit}>
            <input 
              value={prenom}
              placeholder="Entrez votre prénom"
              onChange={handleChange}/>
            <button>Accédez à votre espace</button>
          </form>
        </div>)
}