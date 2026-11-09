import styled from 'styled-components'
import { theme } from '../../../../../theme/index.js'
import BasketCard from './BasketCard.jsx'
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext.jsx'

export default function BasketWithProducts({ basketProducts }) {
	const {handleDeleteFromBasket} = useContext(OrderContext)

	const handleOnDeleteButton = (productId) => {
		handleDeleteFromBasket(productId)
	}

	return (
    <BasketWithProductsStyled>
      {basketProducts.map((product) => (
        <BasketCard
          key={product.id}
          title={product.title}
          amount={product.quantity}
          imageSrc={product.imageSource}
          price={product.price}
					onDelete={() => handleOnDeleteButton(product.id)}
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
	min-height: 0;
  overflow-y: auto;
`
