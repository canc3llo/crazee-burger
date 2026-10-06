import Logout from "./Logout.jsx"
import styled from "styled-components"
import AdminButton from "./AdminButton.jsx"

export default function NavbarRightSide({ username }) {
	return (
		<NavbarRightSideStyled>
			<AdminButton/>
			<Logout username={username}/>
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
`
