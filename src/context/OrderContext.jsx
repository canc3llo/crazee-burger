import { createContext } from "react";

export default createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},

	isCollapsed: false,
	setIsCollapsed: () => {},

	isModeEdit: false, 
	setIsModeEdit: () => {},
	
	currentTabSelected: "add",
	setCurrentTabSelected: () => {},

	menu: [],
	handleAdd: () => {},
	handleDelete: () => {},
	resetMenu: () => {},
	newProduct: [], 
	setNewProduct: () => {},
})