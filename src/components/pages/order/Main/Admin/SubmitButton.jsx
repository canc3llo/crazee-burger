import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function SubmitButton() {
	return (
		<SubmitButtonStyled>
			<span>Ajouter un nouveau produit au menu</span>
		</SubmitButtonStyled>
	)
}

const SubmitButtonStyled = styled.button`
	width: 275px;
	height: 34px;
	margin-top: 8px;

	border-radius: ${theme.borderRadius.round};
	background-color: ${theme.colors.success};
	border : 1px solid ${theme.colors.success};
	grid-column: 2;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover{
		background-color: ${theme.colors.white};
		span{
			color: ${theme.colors.success};
		}
	}

	span{
		color : white;
		font-size: ${theme.fonts.XS};
		font-weight: ${theme.weights.bold};
		margin-top: 1px;
	}
`
