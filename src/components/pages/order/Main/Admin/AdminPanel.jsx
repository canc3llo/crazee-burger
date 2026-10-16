import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function AdminPanel() {
	return (
		<AdminPanelStyled>
			AdminPanel
		</AdminPanelStyled>
	)
}

const AdminPanelStyled = styled.div`
	width: 100%;
	height: 250px;
	box-sizing: border-box;
	position: relative;
	background-color: ${theme.colors.white};
	border : 1px solid ${theme.colors.greyLight};
	box-shadow: ${theme.shadows.subtle};
	display: block;
`
