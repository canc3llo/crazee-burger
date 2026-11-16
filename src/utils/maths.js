import { findInArray } from "./array"

export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}

export function totalPrice(basketProducts, menu) {
  return basketProducts.reduce((total, { id, quantity }) => {
    const productInMenu = findInArray(menu, id)
    if (!productInMenu) return total // produit supprimé du menu

    const price = Number(productInMenu.price)
    if (isNaN(price) || isNaN(quantity)) return total

    return total + price * quantity
  }, 0)
}
