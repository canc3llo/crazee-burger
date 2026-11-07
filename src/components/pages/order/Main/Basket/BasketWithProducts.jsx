import styled from 'styled-components'
import { theme } from '../../../../../theme/index.js'
import BasketProduct from './BasketCard.jsx'

export default function BasketWithProducts({ basketProducts }) {
	return (
    <BasketWithProductsStyled>
      {basketProducts.map((product) => (
        <BasketProduct
          key={product.id}
          title={product.title}
          amount={product.quantity}
          imageSrc={product.imageSource}
          price={product.price}
        />
      ))}
    </BasketWithProductsStyled>
  )
}

const BasketWithProductsStyled = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	font-size: ${theme.fonts.P4};
	font-weight: ${theme.weights.regular};
	color: ${theme.colors.greyBlue};
	padding: 20px 16px;
	box-sizing: border-box;
	gap: 20px;
`
