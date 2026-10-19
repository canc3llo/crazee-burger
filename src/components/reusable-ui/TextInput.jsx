import styled from "styled-components"
import { theme } from "../../theme/index.js" 

export default function TextInput({ className, value, onChange, Icon, ...extraProps }) {
	return (
		<TextInputStyled className={className}>
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
	border-radius: ${theme.borderRadius.round};
	background-color: ${theme.colors.white};
	display: flex;
	align-items: center;
	border : 1px solid blue;
	margin: 0px 32px 18px 32px;

	.icon{
		font-size: ${theme.fonts.SM};
		color : ${theme.colors.greySemiDark};
		margin-left: 25px;
	}

	input{
	font-family: Arial, sans-serif;
	font-size: ${theme.fonts.SM};
	font-weight: ${theme.weights.regular};
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