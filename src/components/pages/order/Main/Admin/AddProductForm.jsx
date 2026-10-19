import styled from "styled-components"
import TextInput from "../../../../reusable-ui/TextInput"
import { theme } from "../../../../../theme"
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useState } from "react";

export default function AddProductForm() {
	const [inputValue, setInputValue] = useState("")

	const handleChange = (event) =>{
      setInputValue(event.target.value)
    }

	return (
		<AddProductFormStyled>
			<div className="info-products">
				<TextInput
					Icon={<FaHamburger className="icon"/>}
					// value={}
					placeholder={"Nom du produit (ex. Super Burger)"} 
					className="text-input-products"/>
				<TextInput 
					Icon={<BsFillCameraFill className="icon"/>}
					// value={}
					placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"} 
					className="text-input-products"/>
				<TextInput 
					Icon={<MdOutlineEuro className="icon"/>}
					// value={}
					placeholder={"Prix"} 
					className="text-input-products"/>
			</div>
			<div className="btn">
				3
			</div>
		</AddProductFormStyled>
	)
}

const AddProductFormStyled = styled.form`
	border : 1px solid purple;
	display: flex;
	flex-direction: column;

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

	.info-products{
		display: flex;
		flex-direction: column;
		width: 645px;
		height: 121px;
		gap: 8px 0;
	}

	.btn{
	width: 275px;
	height: 34px;
	border : 1px solid green;
	grid-column: 2;
	margin-top: 8px;
	border-radius: ${theme.borderRadius.round};
	}
`
