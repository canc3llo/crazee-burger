import styled from "styled-components"
import Card from "../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../utils/maths.js"
import OrderContext from "../../../../context/OrderContext.jsx"
import { useContext } from "react"

const IMAGE_BY_DEFAULT = "/src/assets/img/coming-soon.png"

export default function Menu() {
	const {menu, isModeAdmin, handleDelete } = useContext(OrderContext)
	
	return (
		<MenuStyled>
			{menu.map(({id, imageSource, title, price}) => {
				return (
					<Card
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
