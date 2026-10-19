import styled from "styled-components"
import { theme } from "../../../../../theme"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { getTabsConfig, getTabSelected } from "./getTabsConfig"

export default function AdminPanel() {
	const { currentTabSelected } = useContext(OrderContext)

	const tabs = getTabsConfig()
	const tabSelected = getTabSelected(tabs, currentTabSelected)

	return (
		<AdminPanelStyled>
			{tabSelected && tabSelected.label}
		</AdminPanelStyled>
	)
}

const AdminPanelStyled = styled.div`
	width: 100%;
	height: 250px;
	box-sizing: border-box;
	position: relative;
	background-color: ${theme.colors.white};
	box-shadow: ${theme.shadows.subtle};
	display: block;
`
