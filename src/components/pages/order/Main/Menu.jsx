import styled from "styled-components"
import Produit from "./Product.jsx"
import { useState } from "react"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js"

export default function Menu() {
	const [menu, setMenu] = useState(fakeMenu2)

	return (
		<MenuStyled>
			{menu.map((produit) => {
				return <Produit imageSrc={produit.imageSource} title={produit.title} price={produit.price}/>
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
