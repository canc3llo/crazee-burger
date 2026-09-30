import { useState } from "react"
import { useNavigate, Link } from "react-router"
import { theme } from "../../../theme/index.js"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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
        <div className="input-container">
					<BsPersonCircle className="icon"/> 
					<input
						type="text" 
						placeholder="Entrez votre prénom"
						required
						value={inputValue}
						onChange={handleChange}/>
				</div>
        <button>
					<span>Accéder à mon espace</span>
					<IoChevronForward className="icon"/>
				</button>
       </LoginFormStyled>)
}

const LoginFormStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 auto;
	padding: 2.5rem 2rem;

	font-family: Amatic SC, cursive;

	h1{
		font-size: ${theme.fonts.P5};
		color: ${theme.colors.white};
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

	.input-container{
		width: 400px;
		height: 55px;
		margin: 0px 32px 18px 32px;
		border-radius: 6px;
		background-color: ${theme.colors.white};
		display: flex;
		align-items: center;

		.icon{
			color : ${theme.colors.greySemiDark};
			margin-left: 25px;
		}

		input{
		font-family: Arial, sans-serif;
		font-size: ${theme.fonts.P0};
		color: ${theme.colors.gr};
		margin-left: 8px;
		border: none ;
		width: 100%;
		margin-right: 25px;
		}
	}

	button{
		width: 400px;
		height: 53px;
		background-color: ${theme.colors.primary_burger};
		font-family: Arial, sans-serif;
		font-weight: 900;
		font-size: ${theme.fonts.P0};
		border-radius: 6px;
		border : 1px solid ${theme.colors.primary_burger};
		color: ${theme.colors.white};
		display: flex;
		align-items: center;
		justify-content: center;

		.icon{
			margin-left: 10px;
			margin-top: 1px;
		}
	}

	button:hover{
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}
`