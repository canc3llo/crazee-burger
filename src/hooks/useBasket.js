import { useState } from "react"
import { deepClone, findInArray } from "../utils/array"

export const useBasket = (menu) => {
	const [basketProducts, setBasketProducts] = useState([])
	
	const handleAddToBasket = (idProductAddToBasket) => {
		const basketProductsCopy = deepClone(basketProducts)

		const productAlreadyInBasket = findInArray(basketProductsCopy, idProductAddToBasket)

		if (productAlreadyInBasket) {
			productAlreadyInBasket.quantity += 1
			setBasketProducts(basketProductsCopy)
			return
		}

		const productToAdd = findInArray(menu, idProductAddToBasket)
		const newBasketProduct = { ...productToAdd, quantity: 1 }
		setBasketProducts([newBasketProduct, ...basketProductsCopy])
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