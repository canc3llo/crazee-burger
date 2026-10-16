import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Tab({ className, label, Icon }) {
	return (
		<TabStyled className={className}>
			{Icon && Icon}
			{label && <span>{label}</span>}
		</TabStyled>
	)
}

const TabStyled = styled.div`
	position: relative;
	height: 99%;
	background-color: ${theme.colors.white};
	border-top-left-radius: ${theme.borderRadius.round};
	border-top-right-radius: ${theme.borderRadius.round};
	border : 1px solid ${theme.colors.greyLight};	
	box-sizing: border-box;
	padding: 0 22px;
	font-weight: 400;
	font-size: 16px;
	display: flex;
	align-items: center;

	span{
		margin-top: 3px;
		margin-left: 12px;
	}
`
