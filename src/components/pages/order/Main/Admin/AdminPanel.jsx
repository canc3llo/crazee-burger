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
	border : 1px solid blue;
	width: 100%;
	height: 250px;
	box-sizing: border-box;
	position: relative;
	background-color: ${theme.colors.background_white};
`
