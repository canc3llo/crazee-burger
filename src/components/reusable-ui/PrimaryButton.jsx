import styled from "styled-components"
import { theme } from "../../theme/index.js"

export default function PrimaryButton({ className, label, Icon, onClick }) {
	return (
		<PrimaryButtonStyled className={className} onClick={onClick}>
			<span>{label}</span>
			{Icon && <div className="icon">{Icon}</div>}
		</PrimaryButtonStyled>
	)
}

const PrimaryButtonStyled = styled.button`
	width: 100%;
	height: 53px;
	background-color: ${theme.colors.primary_burger};
	font-family: Arial, sans-serif;
	font-weight: 900;
	font-size: ${theme.fonts.SM};
	border-radius: ${theme.borderRadius.round};
	border : 1px solid ${theme.colors.primary_burger};
	color: ${theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover{
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}

	.icon{
		margin-left: 10px;
		margin-top: 1px;
		display: flex;
	}
`