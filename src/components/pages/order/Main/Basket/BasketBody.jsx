import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext.jsx'
import BasketProduct from './BasketProduct.jsx'

export default function BasketBody() {
	const { basketProducts } = useContext(OrderContext)

	const isBasketEmpty = basketProducts.length === 0

	return (
		<BasketBodyStyled>
			{isBasketEmpty ? (
				<p>Votre commande est vide.</p>
			) : (
				basketProducts.map((product) => (
					<BasketProduct key={product.id} title={product.title} />
				))
			)}
		</BasketBodyStyled>
	)
}

const BasketBodyStyled = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: "Amatic SC", cursive;
	font-size: ${theme.fonts.P4};
	font-weight: ${theme.weights.regular};
	color: ${theme.colors.greyBlue};
	padding: 0 16px;
	box-sizing: border-box;
	gap: 20px;
`
