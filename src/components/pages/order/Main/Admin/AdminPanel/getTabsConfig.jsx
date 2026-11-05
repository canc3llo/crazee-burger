import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import HintMessage from "./HintMessage";

export const getTabsConfig = (isAProductSelected) => [
	{
		index: "add",
		label: "Ajouter un produit",
		Icon: <AiOutlinePlus/>,
		Content: <AddForm/>,
	},
	{
		index: "edit",
		label: "Modifier un produit",
		Icon: <MdModeEditOutline/>,
		Content: isAProductSelected ? <EditForm/> : <HintMessage/>,
	},
]

export const getTabSelected = (tabs, currentTabSelected) =>
	tabs.find((tab) => tab.index === currentTabSelected)