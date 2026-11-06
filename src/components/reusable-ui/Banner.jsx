import styled from "styled-components"
import { theme } from "../../theme"

export default function Banner({ children }) {
	return (
		<BannerStyled>
			{ children }
		</BannerStyled>
	)
}

const BannerStyled = styled.div`
	width: 100%;
	height: 70px;
	background-color: ${theme.colors.background_dark};
	padding: 0 16px;
	box-sizing: border-box;
`
