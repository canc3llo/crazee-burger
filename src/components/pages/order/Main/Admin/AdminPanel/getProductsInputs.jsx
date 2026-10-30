import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getProductsInputs = (product) => [
  {
    id: "0",
    name: "title",
    Icon: <FaHamburger className="icon-new-product" />,
    value: product.title,
    placeholder: "Nom du produit (ex. Super Burger)",
    className: "text-input-products",
    version: "minimalist",
  },
  {
    id: "1",
    name: "imageSource",
    Icon: <BsFillCameraFill className="icon-new-product" />,
    value: product.imageSource,
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    className: "text-input-products",
    version: "minimalist",
  },
  {
    id: "2",
    name: "price",
    Icon: <MdOutlineEuro />,
    value: product.price ? product.price : "",
    placeholder: "Prix",
    version: "minimalist",
  },
]