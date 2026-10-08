import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Produit from "./Produit.jsx"

export default function Main() {
	return (
		<MainStyled>
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
		</MainStyled>
	)
}

const MainStyled = styled.div`
	flex: 1;
	background-color: ${theme.colors.background_white};
	width: 100%;
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
	display: grid;
  grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 330px;
	padding: 50px 92.5px;
	gap: 60px 85px;
	box-sizing: border-box;
	overflow-y: auto;
	overflow-x: hidden;
`