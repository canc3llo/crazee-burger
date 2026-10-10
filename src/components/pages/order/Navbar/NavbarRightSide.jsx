import Logout from "./Logout.jsx"
import styled from "styled-components"
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx"

export default function NavbarRightSide({ username }) {
	return (
		<NavbarRightSideStyled>
			<ToggleButton 
				labelIfUnchecked="ACTIVER LE MODE ADMIN"
				labelIfChecked="DÉSACTIVER LE MODE ADMIN"/>
			<Logout username={username}/>
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 50px;
`
