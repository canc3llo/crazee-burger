import styled from "styled-components"
import { theme } from "../../../../theme/index.js"
import Logo from "../../../reusable-ui/Logo.jsx"
import NavbarRightSide from "./NavbarRightSide.jsx"
import { refreshPage } from "../../../../utils/window.js"

export default function Navbar() {
	return (
		<NavbarStyled>
			<Logo className="logo-order-page" onClick={refreshPage}/>
			<NavbarRightSide/>
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
	border-bottom: 1px solid ${theme.colors.greyLight};
	box-sizing: border-box;

	.logo-order-page{
		cursor: pointer;
	}
`