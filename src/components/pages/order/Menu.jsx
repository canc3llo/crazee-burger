import styled from "styled-components"
import Produit from "./Produit.jsx"

export default function Menu() {
	return (
		<MenuStyled>
			<Produit imageSrc={"../../src/assets/img/burger-bacon-egg.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-vegan.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-bacon-egg.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-vegan.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-bacon-egg.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-vegan.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-bacon-egg.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-vegan.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-bacon-egg.png"} title={"Burger"} price={"5,60"}/>
			<Produit imageSrc={"../../src/assets/img/burger-vegan.png"} title={"Burger"} price={"5,60"}/>
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	flex: 1;
	display: grid;
  grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 330px;
	padding: 50px 92.5px;
	gap: 60px 85px;
	box-sizing: border-box;
	border : 1px solid red;
`
