import styled from "styled-components"
import Card from "../../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx"
import EmptyMenuClient from "./EmptyMenuClient.jsx"

const IMAGE_BY_DEFAULT = "/src/assets/img/coming-soon.png"

export default function Menu() {
	const {menu, isModeAdmin, handleDelete, setIsModeEdit, setProductSelected } = useContext(OrderContext)

	const handleClick = (idProductClicked) =>{
		const productSelected = menu.find((product) => product.id === idProductClicked)
		setProductSelected(productSelected)
		setIsModeEdit(true)
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
						onDelete={() => handleDelete(id)}
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
