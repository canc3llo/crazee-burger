 import { useState } from "react"
import { deepClone, findInArray } from "../utils/array"

export const useBasket = () => {
	const [basketProducts, setBasketProducts] = useState([])

	const handleAddToBasket = (idProductAddToBasket) => {
		const basketProductsCopy = deepClone(basketProducts)
		const productAlreadyInBasket = findInArray(basketProductsCopy, idProductAddToBasket)

		if (productAlreadyInBasket) {
			productAlreadyInBasket.quantity += 1
			setBasketProducts(basketProductsCopy)
			return
		}

		const newBasketCard = { id: idProductAddToBasket, quantity: 1 }
		const newBasketProducts = [newBasketCard, ...basketProductsCopy]

		setBasketProducts(newBasketProducts)
	}

	const handleDeleteFromBasket = (idProductDeleteFromBasket) => {
		const basketProductsCopy = deepClone(basketProducts)
		
		const productInBasket = findInArray(basketProductsCopy, idProductDeleteFromBasket)

		if (productInBasket.quantity > 1){
			productInBasket.quantity -= 1
			setBasketProducts(basketProductsCopy)
			return
		}

		const basketUpdated = basketProductsCopy.filter(
    	(product) => product.id !== idProductDeleteFromBasket)
  	setBasketProducts(basketUpdated)
	}
	return {handleAddToBasket, handleDeleteFromBasket, basketProducts, setBasketProducts}
}