import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Logout from "./Logout.jsx"
import Logo from "../../reusable-ui/Logo.jsx"

export default function Navbar() {
	return (
		<NavbarStyled>
			<Logo/>
			<Logout/>
		</NavbarStyled>
	)
}

const NavbarStyled = styled.nav`
	box-sizing: border-box;
	padding-left: 20px;
	padding-right: 70px;
	width: 100%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
	background-color: ${theme.colors.white};
`