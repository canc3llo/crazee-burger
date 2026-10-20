import styled from "styled-components"
import TextInput from "../../../../reusable-ui/TextInput"
import { theme } from "../../../../../theme"
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useState } from "react";

export default function InputFields() {
	const [inputValueName, setInputValueName] = useState("")
	const [inputValueURL, setInputValueURL] = useState("")
	const [inputValuePrice, setInputValuePrice] = useState("")

	const handleChangeName = (event) => {
      setInputValueName(event.target.value)
  }

	const handleChangeURL = (event) => {
      setInputValueURL(event.target.value)
  }

	const handleChangePrice = (event) => {
      setInputValuePrice(event.target.value)
  }

	return (
		<InputFieldsStyled>
			<TextInput
				Icon={<FaHamburger className="icon"/>}
				value={inputValueName}
				onChange={handleChangeName}
				placeholder={"Nom du produit (ex. Super Burger)"} 
				className="text-input-products"/>
			<TextInput 
				Icon={<BsFillCameraFill className="icon"/>}
				value={inputValueURL}
				onChange={handleChangeURL}
				placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"} 
				className="text-input-products"/>
			<TextInput 
				Icon={<MdOutlineEuro className="icon"/>}
				value={inputValuePrice}
				onChange={handleChangePrice }
				placeholder={"Prix"} 
				className="text-input-products"/>
		</InputFieldsStyled>
	)
}

const InputFieldsStyled = styled.form`
	display: flex;
	flex-direction: column;
	width: 645px;
	height: 121px;
	gap: 8px 0;
	
	.text-input-products{
		background-color: ${theme.colors.background_white};
		margin: 0;
		input{
			background-color: ${theme.colors.background_white};
			margin-left: 13px;
			
				&::placeholder{
				color : ${theme.colors.greySemiDark};
				background-color: ${theme.colors.background_white};
				}
		}
		.icon{
			color: ${theme.colors.greyDark}
		}
	}
`
