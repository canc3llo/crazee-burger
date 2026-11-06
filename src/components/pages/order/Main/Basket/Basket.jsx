import styled from "styled-components"
import { theme } from "../../../../../theme"
import Total from "./Total"
import { formatPrice } from "../../../../../utils/maths"
import Footer from "./Footer"
import BasketBody from "./BasketBody"

export default function Basket() {
	return (
		<BasketStyled>
			<Total amountToPay={formatPrice(0)}/>
			<BasketBody/>
			<Footer span={"Codé avec ❤️ et React.JS"}/>
		</BasketStyled>
	)
}

const BasketStyled = styled.div`
	background-color: ${theme.colors.background_white};
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: ${theme.shadows.basket};
`
