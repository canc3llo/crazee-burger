import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Tab({ className, label, Icon }) {
	return (
		<TabStyled className={className}>
			{Icon && Icon}
			<span>{label}</span>
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
	padding: 13px 22px 14px 22px;
	font-weight: 400;
	font-size: 16px;
`
