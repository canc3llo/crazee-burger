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

	const inputTextProps = [
		{
			id: "0",
			name: "title",
			Icon: <FaHamburger className="icon-new-product"/>,
			value: newProduct.title,
			onChange: handleChange,
			placeholder: "Nom du produit (ex. Super Burger)",
			className: "text-input-products",
			version: "minimalist",
		},
		{
			id: "1",
			name: "imageSource",
			Icon: <BsFillCameraFill className="icon-new-product"/>,
			value: newProduct.imageSource,
			onChange: handleChange,
			placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
			className: "text-input-products",
			version: "minimalist",
		},
		{
			id: "2",
			name: "price",
			Icon: <MdOutlineEuro/>,
			value: newProduct.price ? newProduct.price : "",
			onChange: handleChange,
			placeholder: "Prix",
			version: "minimalist",
		},
	]

	return (
		<InputFieldsStyled>
			{inputTextProps.map(input => (
				<TextInput 
					key={input.id}
					name={input.name}
					Icon={input.Icon}
					value={input.value}
					onChange={input.onChange}
					placeholder={input.placeholder}
					className={input.className}
					version={input.version}
					// {...input}
				/>
			))}
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
