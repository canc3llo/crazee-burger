import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"

export const useMenu = () => {
	const [menu, setMenu] = useState(fakeMenu.LARGE)

	const handleAdd = (newProduct) => {
		const menuCopy = deepClone(menu)
		const menuUpdated = [newProduct, ...menuCopy]
		setMenu(menuUpdated)
	}

	const handleEdit = (productBeingEdited) => {
		const menuCopy = deepClone(menu)
		const indexProductToEdit = menu.findIndex(product => product.id === productBeingEdited.id)
		menuCopy[indexProductToEdit] = productBeingEdited
		setMenu(menuCopy)
	}

	const handleDelete = (idProductToDelete) => {
		const menuCopy = deepClone(menu)
		const menuUpdated = menuCopy.filter((product) => product.id !== idProductToDelete)
		setMenu(menuUpdated)
	}

	const resetMenu = () => {
		setMenu(fakeMenu.MEDIUM)
	}

	return {
		menu,
		handleAdd,
		handleEdit,
		handleDelete,
		resetMenu
	}
}