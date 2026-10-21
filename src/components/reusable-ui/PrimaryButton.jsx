import styled, { css } from "styled-components"
import { theme } from "../../theme/index.js"

export default function PrimaryButton({ version, label, Icon, onClick }) {
	return (
		<PrimaryButtonStyled version={version} onClick={onClick}>
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

	${({version}) => extraStyle[version]}
`

const buttonNormalStyle = css`
`

const buttonBigStyle = css`
	height: 50px;
	width: 224px;
	font-weight: ${theme.weights.bold};
	font-size: ${theme.fonts.XS};
`

const buttonMinimalistStyle = css`
	width: 95px;
	height: 38px;
	font-size: ${theme.fonts.XS};
`

const buttonSuccesStyle = css`
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
`

const extraStyle = {
	normal: buttonNormalStyle,
	big: buttonBigStyle,
	minimalist: buttonMinimalistStyle,
	succes: buttonSuccesStyle,
}