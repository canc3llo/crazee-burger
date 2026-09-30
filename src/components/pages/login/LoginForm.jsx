import { useState } from "react"
import { useNavigate, Link } from "react-router"
import styled from "styled-components"

export default function LoginForm() {
    //state ((data) (variables))
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
  
    //comportement
    const handleSubmit = (event) =>{
      event.preventDefault()
      setInputValue("")
      navigate(`order/${inputValue}`)
    }
  
    const handleChange = (event) =>{
      setInputValue(event.target.value)
    }
  
    //render
    return( 
      <LoginFormStyled onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
        <input
          type="text" 
          placeholder="Entrez votre prénom"
          required
          value={inputValue}
          onChange={handleChange}/>
        <button>Accéder à mon espace</button>
       </LoginFormStyled>)
}

const LoginFormStyled = styled.form`
	border : 1px solid red;

	h1, h2{
		color: white;
	}
`