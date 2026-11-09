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
	handleEdit: () => {},
	handleDelete: () => {},
	resetMenu: () => {},
	newProduct: {}, 
	setNewProduct: () => {},
	productSelected: {},
	setProductSelected: () => {},
	editTitleRef: {},
	basketProducts: [],
	setBasketProducts: () => {},
	handleAddToBasket: () => {},
	handleDeleteFromBasket: () => {},
})