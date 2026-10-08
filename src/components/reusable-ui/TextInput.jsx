import styled from "styled-components"
import { theme } from "../../theme/index.js" 

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
	return (
		<TextInputStyled>
			{Icon && Icon}
			<input
				value={value}
				onChange={onChange}
				type="text"
				{...extraProps}
			/>
		</TextInputStyled>
	)
}

const TextInputStyled = styled.div`
	width: 100%;
	height: 55px;
	margin: 0px 32px 18px 32px;
	border-radius: ${theme.borderRadius.round};
	background-color: ${theme.colors.white};
	display: flex;
	align-items: center;

	.icon{
		font-size: ${theme.fonts.P0};
		color : ${theme.colors.greySemiDark};
		margin-left: 25px;
	}

	input{
	font-family: Arial, sans-serif;
	font-size: ${theme.fonts.P0};
	color: ${theme.colors.gr};
	margin-left: 8px;
	border: none ;
	width: 100%;
	margin-right: 25px;

		&::placeholder{
			color : ${theme.colors.greySemiDark};
			background-color: ${theme.colors.white};
		}
	}
`