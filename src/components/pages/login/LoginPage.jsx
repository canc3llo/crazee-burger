import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo"
import styled from "styled-components"
import burgerBackground from "../../../assets/img/burger-background.jpg"

export default function LoginPage(){
    return(
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
	width: 100vw;
	height: 100vh;

	background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${burgerBackground});
	background-size: cover;
	background-position: center;

	box-sizing: border-box;
	overflow: hidden;
	
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
