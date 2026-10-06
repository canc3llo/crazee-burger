import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Logo from "../../reusable-ui/Logo.jsx"
import NavbarRightSide from "./NavbarRightSide.jsx"
import { refreshPage } from "../../../utils/window.jsx"

export default function Navbar({ username }) {
	return (
		<NavbarStyled>
			<Logo className="logo-order-page" onClick={refreshPage}/>
			<NavbarRightSide username={username}/>
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
	border-top-left-radius: ${theme.borderRadius.extraRound};
	border-top-right-radius: ${theme.borderRadius.extraRound};
	background-color: ${theme.colors.white};

	.logo-order-page{
		cursor: pointer;
	}
`