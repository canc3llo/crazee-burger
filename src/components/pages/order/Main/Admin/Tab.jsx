import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Tab({ className, label, Icon, onClick }) {
	return (
		<TabStyled onClick={onClick} className={className}>
			<div className="icon">
				{Icon && Icon}
			</div>
			{label && <span>{label}</span>}
		</TabStyled>
	)
}

const TabStyled = styled.button`
	position: relative;
	height: 99%;
	padding: 0 22px;
	background-color: ${theme.colors.white};
	cursor: pointer;

	box-sizing: border-box;
	border-top-left-radius: ${theme.borderRadius.round};
	border-top-right-radius: ${theme.borderRadius.round};
	border: solid ${theme.colors.greyLight};	
	box-shadow: ${theme.shadows.subtle};
	border-width: 1px 1px 2px 1px;
	
	font-weight: 400;
	font-size: ${theme.fonts.P0};
	color: ${theme.colors.greySemiDark};

	display: flex;
	align-items: center;

	&:hover{
		border-bottom-color: ${theme.colors.white};
		text-decoration: underline 1.5px;
	}

	.icon{
		display: flex;
	}

	span{
		margin-left: 12px;
	}
`
