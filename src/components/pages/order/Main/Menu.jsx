import styled from "styled-components"
import Card from "../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../utils/maths.js"
import OrderContext from "../../../../context/OrderContext.jsx"
import { useContext } from "react"

export default function Menu() {
	const {menu} = useContext(OrderContext)
	
	return (
		<MenuStyled>
			{menu.map(({id, imageSource, title, price}) => {
				return (
					<Card
						key={id} 
						imageSrc={imageSource} 
						title={title} 
						leftDescription={formatPrice(price)}
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
