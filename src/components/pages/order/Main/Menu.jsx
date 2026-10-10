import styled from "styled-components"
import Card from "../../../reusable-ui/Card.jsx"
import { useState } from "react"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js"
import { formatPrice } from "../../../../utils/maths.js"

export default function Menu() {
	const [menu] = useState(fakeMenu2)

	return (
		<MenuStyled>
			{menu.map(({id, imageSource, title, price}) => {
				return <Card
									key={id} 
									imageSrc={imageSource} 
									title={title} 
									leftDescription={formatPrice(price)}
								/>
			})}
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	display: grid;
  grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 330px;
	padding: 50px 90px 150px;
	gap: 60px;
	justify-items: center;
	box-sizing: border-box;
`
