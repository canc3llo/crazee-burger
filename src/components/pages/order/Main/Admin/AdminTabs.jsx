import styled from "styled-components"
import Tab from "./Tab"
import { FiChevronDown } from "react-icons/fi";

export default function AdminTabs() {
	return (
		<AdminTabsStyled>
			<Tab Icon={FiChevronDown}/>
			<Tab label={"Ajouter un produit"}/>
			<Tab label={"Modifier un produit"}/>
		</AdminTabsStyled>
	)
}

const AdminTabsStyled = styled.div`
	display: flex;
	align-items: flex-end;
	border : 1px solid purple;
	height: 44px;
	padding: 0 71px;
	box-sizing: border-box;
`
