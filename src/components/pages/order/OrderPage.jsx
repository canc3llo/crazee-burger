import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Navbar from "./Navbar/NavBar.jsx"
import Main from "./Main/Main.jsx"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from "../../../enums/product.js"
import { useMenu } from "../../../hooks/useMenu.js"
import { fakeMenu } from "../../../fakeData/fakeMenu.js"
import { deepClone } from "../../../utils/array"

export default function OrderPage() {
	const [isModeAdmin, setIsModeAdmin] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [isModeEdit, setIsModeEdit] = useState(false)
	const [currentTabSelected, setCurrentTabSelected] = useState("edit")
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
	const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
	const editTitleRef = useRef()
	const { menu, handleAdd, handleEdit, handleDelete, resetMenu } = useMenu()
	const [basketProducts, setBasketProducts] = useState(fakeMenu.SMALL)

	const handleAddToBasket = (idProductAddToBasket) => {
		const basketProductsCopy = deepClone(basketProducts)
		const productToAdd = menu.find((product) => product.id === idProductAddToBasket)
		const basketProductsUpdated = [productToAdd, ...basketProductsCopy]
		setBasketProducts(basketProductsUpdated)
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
		basketProducts,
		setBasketProducts,
		handleAddToBasket,
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