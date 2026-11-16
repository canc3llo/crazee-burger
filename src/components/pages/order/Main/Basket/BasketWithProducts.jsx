import styled from 'styled-components'
import { theme } from '../../../../../theme/index.js'
import BasketCard from './BasketCard.jsx'
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext.jsx'
import { findInArray } from '../../../../../utils/array.js'

export default function BasketWithProducts({ basketProducts }) {
	const {handleDeleteFromBasket, isModeAdmin, productSelected, handleProductSelected, menu} = useContext(OrderContext)

	const handleOnDeleteButton = (productId) => {
		handleDeleteFromBasket(productId)
	}

	const checkIfProductIsSelected = (idProductInMenu, idProductClickedOn) => {
		return idProductInMenu === idProductClickedOn 
	}

	const handleClick = (idProductClicked) =>{
		if (!isModeAdmin) return
		handleProductSelected(idProductClicked)
	}

	return (
    <BasketWithProductsStyled>
      {basketProducts.map((product) => {
				const productInMenu = findInArray(menu, product.id)
				if (!productInMenu) return null
				return (
					<BasketCard
						key={productInMenu.id}
						title={productInMenu.title}
						amount={product.quantity}
						imageSrc={productInMenu.imageSource}
						price={productInMenu.price}
						onDelete={() => handleOnDeleteButton(productInMenu.id)}
						isHoverable={isModeAdmin}
						isSelected={checkIfProductIsSelected(productInMenu.id, productSelected.id)}
						onClick={() => handleClick(productInMenu.id)}
					/>
				)
			})}
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
