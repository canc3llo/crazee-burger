import styled from "styled-components"
import logo from "../../assets/logo-orange.png"

export default function Logo(){
    return(
        <LogoStyled>
            <h1>Crazee</h1>
            <img src={logo} alt="Logo" />
            <h1>Burger</h1>
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
		padding: 0 20px;
		height: 150px;
	}
`
