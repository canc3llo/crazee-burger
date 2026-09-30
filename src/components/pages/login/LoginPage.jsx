import LoginForm from "./LoginForm"
import Logo from "../Logo"
import styled from "styled-components"
import burgerBackground from "../../../assets/burger-background.jpg"

export default function LoginPage(){
    return(
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${burgerBackground});
	background-size: cover;
	background-position: center;

	box-sizing: border-box;
	overflow: hidden;

	width: 100vw;
	height: 100vh;
	
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
