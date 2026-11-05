import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Navbar from "./Navbar/NavBar.jsx"
import Main from "./Main/Main.jsx"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext.jsx"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../../../enums/product.js"
import { deepClone } from "../../../utils/array.js"


export default function OrderPage() {
	const [isModeAdmin, setIsModeAdmin] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [isModeEdit, setIsModeEdit] = useState(false)
	const [currentTabSelected, setCurrentTabSelected] = useState("edit")
	const [menu, setMenu] = useState(fakeMenu.MEDIUM)
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
	const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
	const editTitleRef = useRef()

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

	const orderContextValue = {
		isModeAdmin,
		setIsModeAdmin,
		isCollapsed,
		setIsCollapsed,
		isModeEdit, 
		setIsModeEdit,
		currentTabSelected, 
		setCurrentTabSelected,
		menu,
		handleAdd,
		handleEdit,
		handleDelete,
		resetMenu,
		newProduct,
		setNewProduct,
		productSelected,
		setProductSelected,
		editTitleRef,
	}

  return (
    <OrderContext.Provider value={orderContextValue}>
			<OrderPageStyled>
				<div className="container">
					<Navbar />
					<Main />
				</div>
			</OrderPageStyled>
		</OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  box-sizing: border-box;
  background-color: ${theme.colors.primary};
	display: flex;
	align-items: center;
	justify-content: center;

  .container {
    height: 95vh;
		width: 1400px; // use vw? 
    display: flex;
    flex-direction: column;
		align-items: center;
  }
`