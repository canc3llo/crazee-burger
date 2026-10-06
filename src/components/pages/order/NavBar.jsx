import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Logout from "./Logout.jsx"
import Logo from "../../reusable-ui/Logo.jsx"

export default function NavBar() {
	return (
		<NavBarStyled>
			<Logo/>
			<Logout/>
		</NavBarStyled>
	)
}

const NavBarStyled = styled.div`
	box-sizing: border-box;
	padding-left: 20px;
	width: 100%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
	background-color: ${theme.colors.white};
`