import styled from "styled-components"
import Tab from "./Tab"
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs() {
	return (
		<AdminTabsStyled>
			<Tab Icon={<FiChevronDown/>}/>
			<Tab Icon={<AiOutlinePlus/>} label={"Ajouter un produit"}/>
			<Tab Icon={<MdModeEditOutline/>} label={"Modifier un produit"}/>
		</AdminTabsStyled>
	)
}

const AdminTabsStyled = styled.div`
	display: flex;
	align-items: flex-end;
	height: 44px;
	padding: 0 71px;
	box-sizing: border-box;
`
