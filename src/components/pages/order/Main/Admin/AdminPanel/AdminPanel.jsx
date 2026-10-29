import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext"
import { getTabsConfig, getTabSelected } from "./getTabsConfig.jsx"
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js"

export default function AdminPanel() {
	const { currentTabSelected, productSelected } = useContext(OrderContext)

	const isAProductSelected = productSelected !== EMPTY_PRODUCT
	const tabs = getTabsConfig(isAProductSelected)
	const tabSelected = getTabSelected(tabs, currentTabSelected)

	return (
		<AdminPanelStyled>
			{tabSelected && tabSelected.Content}
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
	padding-left: 71px;
	padding-top: 31px;
`
