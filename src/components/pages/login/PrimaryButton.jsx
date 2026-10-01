import styled from "styled-components"
import { theme } from "../../../theme/index.js"

export default function PrimaryButton({ label, Icon }) {
	return (
		<PrimaryButtonStyled>
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryButtonStyled>
	)
}

const PrimaryButtonStyled = styled.button`
	width: 400px;
	height: 53px;
	background-color: ${theme.colors.primary_burger};
	font-family: Arial, sans-serif;
	font-weight: 900;
	font-size: ${theme.fonts.P0};
	border-radius: 6px;
	border : 1px solid ${theme.colors.primary_burger};
	color: ${theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;

	.icon{
		margin-left: 10px;
		margin-top: 1px;
	}

	&:hover{
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}
`