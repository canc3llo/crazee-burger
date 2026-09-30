import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { theme } from "../../../theme/index.js"
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
        <hr/>
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-family: Amatic SC, cursive;
	color: ${theme.colors.white};

	h1{
		font-size: ${theme.fonts.P5};
	}

	hr{
		width: 400px;
		height: 1px;
		background-color: #F56A2C;
		border : 1px solid #F56A2C;
		margin: 0px 32px;
	}

	h2{
		font-size: ${theme.fonts.P4};
		margin: 40px 0px 18px 0px;
	}

	input{
		width: 400px;
		height: 55px;
		margin: 0px 32px 18px 32px;
		font-family: Arial, sans-serif;
	}

	button{
		width: 400px;
		height: 53px;
		background-color: ${theme.colors.primary_burger};
		font-family: Arial, sans-serif;
		font-style: bold;
		font-size: ${theme.fonts.P0};
		border-radius: 6px;
		border : 1px solid ${theme.colors.primary_burger};
		color: ${theme.colors.white};
	}

	button:hover{
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}
`