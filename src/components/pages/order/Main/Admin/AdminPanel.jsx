import styled from "styled-components"
import { theme } from "../../../../../theme"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"

export default function AdminPanel() {
	const { currentTabSelected } = useContext(OrderContext)

	return (
		<AdminPanelStyled>
			{currentTabSelected === "add" ? "Ajouter un produit" : ""}
			{currentTabSelected === "edit" ? "Modifier un produit" : ""}
		</AdminPanelStyled>
	)
}

const AdminPanelStyled = styled.div`
	width: 100%;
	height: 250px;
	box-sizing: border-box;
	position: relative;
	background-color: ${theme.colors.white};
	/* border : 1px solid ${theme.colors.greyLight}; */
	box-shadow: ${theme.shadows.subtle};
	display: block;
`
