import styled from "styled-components"
import { theme } from "../../../../../theme"
import Total from "./Total"
import { formatPrice } from "../../../../../utils/maths"
import Footer from "./Footer"
import BasketWithProducts from "./BasketWithProducts.jsx"
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext.jsx'
import BasketEmpty from "./BasketEmpty.jsx"

export default function Basket() {
	const { basketProducts } = useContext(OrderContext)

	const isBasketEmpty = !basketProducts || basketProducts.length === 0

	const totalToPay = basketProducts.reduce((total, product) => {
		if (isNaN(product.price) || isNaN(product.quantity)) {
			return total
		}
		return total + product.price * product.quantity
	}, 0)
	

	return (
		<BasketStyled>
			<Total amountToPay={formatPrice(totalToPay)}/>
			{isBasketEmpty ? 
				( <BasketEmpty /> )
				: 
				( <BasketWithProducts basketProducts={basketProducts} /> )
			}
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
	height: 100%;       /* ou une hauteur fixe / 100vh selon ton layout */
  min-height: 0;
  overflow: hidden;
`
