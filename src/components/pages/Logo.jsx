import styled from "styled-components"
import logo from "../../assets/logo-orange.png"
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
	border : 1px solid purple;
	color: white;
	font-size: 2rem;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	img{
		margin: 0 20px;
		height: 150px;
		border : 1px solid yellow;
	}

	h1{
		font-family: Amatic SC, cursive;
		font-size: 8rem;
		color: ${theme.colors.primary};
		margin: 0;
	}
`
