 import styled from "styled-components"
import TextInput from "../../../../reusable-ui/TextInput"
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export default function InputFields({ newProduct, setNewProduct }) {
	const handleChange = (event) => {
		const {name, value} = event.target
		setNewProduct({...newProduct, [name] : value})
	}

	return (
		<InputFieldsStyled>
			<TextInput
				name="title"
				Icon={<FaHamburger className="icon-new-product"/>}
				value={newProduct.title}
				onChange={handleChange}
				placeholder={"Nom du produit (ex. Super Burger)"} 
				className={"text-input-products"}
				version="minimalist"
			/>
			<TextInput
				name="imageSource"
				Icon={<BsFillCameraFill className="icon-new-product"/>}
				value={newProduct.imageSource}
				onChange={handleChange}
				placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"} 
				className={"text-input-products"}
				version="minimalist"
			/>
			<TextInput
				name="price"
				Icon={<MdOutlineEuro/>}
				value={newProduct.price ? newProduct.price : ""}
				onChange={handleChange}
				placeholder={"Prix"}
				version="minimalist"
			/>
		</InputFieldsStyled>
	)
}

const InputFieldsStyled = styled.div`
	width: 100%;
	height: 100%;
	gap: 8px 0;
	grid-area: 1/2 / 4/3;
	display: flex;
	flex-direction: column;
`
