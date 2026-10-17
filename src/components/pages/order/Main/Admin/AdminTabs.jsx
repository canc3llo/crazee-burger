import styled from "styled-components"
import Tab from "./Tab"
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
	return (
		<AdminTabsStyled>
			<Tab 
				Icon={ isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
				onClick={ () => setIsCollapsed(!isCollapsed)}
				className={isCollapsed ? "is-active" : ""}/>
			<Tab Icon={<AiOutlinePlus/>} label={"Ajouter un produit"}/>
			<Tab Icon={<MdModeEditOutline/>} label={"Modifier un produit"}/>
		</AdminTabsStyled>
	)
}

const AdminTabsStyled = styled.div`
	display: flex;
	align-items: flex-end;
	height: 44px;
	padding: 0 5%;
	box-sizing: border-box;
	gap: 0 1px;

	.is-active{
		background-color: ${theme.colors.background_dark};
		color: ${theme.colors.white};
		border-color: ${theme.colors.background_dark};
	}
`
