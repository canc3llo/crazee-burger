import styled from "styled-components"
import { theme } from "../../../../../theme"
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

export default function SubmitButton() {
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleClick = () => {
		setIsSubmitted(true)
		setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
	}

	return (
		<SubmitButtonStyled>
			<button onClick={handleClick}>Ajouter un nouveau produit au menu</button>
			{isSubmitted && (
				<div className="succes">
					<FiCheck />
					<span>Ajouté avec succès !</span>
				</div>)}
			
		</SubmitButtonStyled>
	)
}

const SubmitButtonStyled = styled.div`
	grid-column: 2;
	margin-top: 8px;
	display: flex;
	flex-direction: row;

	button{
		width: 275px;
		height: 34px;

		border-radius: ${theme.borderRadius.round};
		background-color: ${theme.colors.success};
		border : 1px solid ${theme.colors.success};

		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		color : white;
		font-size: ${theme.fonts.XS};
		font-weight: ${theme.weights.bold};

		&:hover{
			background-color: ${theme.colors.white};
			color: ${theme.colors.success};
		}

	}
	
	.succes{
		display: flex;
		align-items: center;
		color: ${theme.colors.success};
		margin-left: 15px;

		span{
			margin-top: 1px;
			margin-left: 5px;
			color: ${theme.colors.success};
			font-size: ${theme.fonts.SM};
			font-weight: ${theme.weights.regular};
		}
	}
`
