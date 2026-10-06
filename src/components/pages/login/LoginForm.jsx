import { useNavigate } from "react-router"
import { useState } from "react"
import { theme } from "../../../theme/index.js"
import styled from "styled-components"
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput.jsx"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

export default function LoginForm() {
    //state ((data) (variables))
		const [inputValue, setInputValue] = useState("")	
    const navigate = useNavigate()
  
    //comportement
    const handleSubmit = (event) =>{
      event.preventDefault()
      navigate(`order/${inputValue}`)
			setInputValue("")
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
        <TextInput 
					value={inputValue} 
					onChange={handleChange} 
					Icon={<BsPersonCircle className="icon" />} 
					placeholder="Entrez votre prénom" required 
				/>
        <PrimaryButton 
					label="Accéder à mon espace" 
					Icon={<IoChevronForward className="icon-button" />}
				/>
      </LoginFormStyled>)
}

const LoginFormStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 auto;
	padding: 2.5rem 2rem; //padding -
	font-family: Amatic SC, cursive;

	h1{
		font-size: ${theme.fonts.P5};
		color: ${theme.colors.white};
		// margin +
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
		color: ${theme.colors.white};
	}

	.icon-button{
		margin-left: 10px;
		margin-top: 1px;
	}
	
		
`