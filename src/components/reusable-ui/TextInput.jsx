import styled, { css } from "styled-components"
import { theme } from "../../theme/index.js" 

export default function TextInput({ value, onChange, Icon, version, ...extraProps }) {
	return (
		<TextInputStyled version={version}>
			<div className="icon">
				{Icon && Icon}
			</div>
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
	margin: 0px 32px 18px 32px;

	.icon{
		font-size: ${theme.fonts.SM};
		color : ${theme.colors.greySemiDark};
		margin-left: 25px;
		display: flex;
	}

	input{
	font-family: Arial, sans-serif;
	font-size: ${theme.fonts.SM};
	font-weight: ${theme.weights.regular};
	margin-left: 10px;
	border: none ;
	width: 100%;
	margin-right: 25px;

		&::placeholder{
			color : ${theme.colors.greySemiDark};
			background-color: ${theme.colors.white};
		}
	}
	/* ${(props) => {
		if (props.version === "normal") return textInputNormalStyle
		if (props.version === "minimalist") return textInputMinimalistStyle
	}} */

	${({version}) => extraStyle[version]}
`

const textInputNormalStyle = css`
`

const textInputMinimalistStyle = css`
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
`

const extraStyle = {
	normal: textInputNormalStyle,
	minimalist: textInputMinimalistStyle,
}