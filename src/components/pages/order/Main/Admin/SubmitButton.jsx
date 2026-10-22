import styled from "styled-components"
import { theme } from "../../../../../theme"
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx"

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
			<PrimaryButton 
				onClick={handleClick}
				label={"Ajouter un nouveau produit au menu"}
				version="succes" size="extralarge"/>
			{isSubmitted && 
				<div className="succes">
					<FiCheck />
					<span>Ajouté avec succès !</span>
				</div>}
		</SubmitButtonStyled>
	)
}

const SubmitButtonStyled = styled.div`
	grid-column: 2;
	margin-top: 8px;
	display: flex;
	flex-direction: row;
	
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
