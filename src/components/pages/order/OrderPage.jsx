import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Navbar from "./Navbar/NavBar.jsx"
import Main from "./Main/Main.jsx"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext.jsx"
import { fakeMenu } from "../../../fakeData/fakeMenu"


export default function OrderPage() {
	const [isModeAdmin, setIsModeAdmin] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [currentTabSelected, setCurrentTabSelected] = useState("add")
	const [menu, setMenu] = useState(fakeMenu.MEDIUM)
	const [newProduct, setNewProduct] = useState(theme.EMPTY_PRODUCT)

	const handleAdd = (newProduct) => {
		const menuCopy = [...menu]
		const menuUpdated = [newProduct, ...menuCopy]
		setMenu(menuUpdated)
	}

	const handleDelete = (idProductToDelete) => {
		const menuCopy = [...menu]
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
		currentTabSelected, 
		setCurrentTabSelected,
		menu,
		handleAdd,
		handleDelete,
		resetMenu,
		newProduct, 
		setNewProduct,
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