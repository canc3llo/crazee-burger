import styled from "styled-components"
import Card from "../../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx"
import EmptyMenuClient from "./EmptyMenuClient.jsx"
import { EMPTY_PRODUCT } from "../../../../../enums/product.js"

const IMAGE_BY_DEFAULT = "/src/assets/img/coming-soon.png"

export default function Menu() {
	const {
		menu,
		isModeAdmin,
		handleDelete,
		setIsModeEdit,
		productSelected,
		setProductSelected,
		setIsCollapsed,
		setCurrentTabSelected,
		editTitleRef,
		handleAddToBasket,
	} = useContext(OrderContext)

	const handleClick = async (idProductClicked) =>{
		if (!isModeAdmin) return

		const productClickedOn = menu.find((product) => product.id === idProductClicked)
		await setIsCollapsed(false)
		await setCurrentTabSelected("edit")
		await setIsModeEdit(true)
		await setProductSelected(productClickedOn)
		editTitleRef.current.focus() 
	}

	const checkIfProductIsSelected = (idProductInMenu, idProductClickedOn) => {
		return idProductInMenu === idProductClickedOn 
	}

	const handleCardDelete = (event, idProductToDelete) => {
		event.stopPropagation()
		handleDelete(idProductToDelete)
		idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
		editTitleRef.current.focus()
	}

	const handleAdd = (event, idProductAddToBasket) =>{
		event.stopPropagation()
		handleAddToBasket(idProductAddToBasket)
	}

	if (menu.length === 0){
		if(!isModeAdmin)
			return(<EmptyMenuClient/>)
		else
			return(<EmptyMenuAdmin/>)
	}
	
	return (
		<MenuStyled>
			{menu.map((product) => {
				const { id, imageSource, title, price } = product
				return (
					<Card
						onClick={() => handleClick(id)}
						key={id} 
						imageSrc={imageSource ? imageSource : IMAGE_BY_DEFAULT} 
						title={title} 
						leftDescription={formatPrice(price)}
						hasDeleteButton={isModeAdmin}
						onDelete={(event) => handleCardDelete(event, id)}
						isHoverable={isModeAdmin}
						isSelected={checkIfProductIsSelected(id, productSelected.id)}
						onAddToBasket={(event) => handleAdd(event, id)}
					/>
				)
			})}
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-auto-rows: 330px;
	padding: 50px 90px 150px;
	gap: 60px;
	justify-items: center;
	box-sizing: border-box;
	overflow-y: scroll;
`
