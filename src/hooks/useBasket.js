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

	return {handleAddToBasket, basketProducts, setBasketProducts}
}