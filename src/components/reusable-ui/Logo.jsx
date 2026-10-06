 import styled from "styled-components"
import logo from "../../assets/img/logo-orange.png"
import {theme} from "../../theme/index.js"

export default function Logo(){
    return(
        <LogoStyled>
            <h1>CRAZEE</h1>
            <img src={logo} alt="Logo" />
            <h1>BURGER</h1>
        </LogoStyled>)
}

const LogoStyled = styled.div`
	border : 1px solid blue;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	h1{
		font-family: Amatic SC, cursive;
		font-size: ${theme.fonts.P4};
		color: ${theme.colors.primary};
		font-weight: ${theme.weights.bold};
		letter-spacing: 1.5px;
		margin: 0;
	}

	img{
		margin: 0 5px;
		height: 60px;
		width: 80px;
	}
`
