import styled from "styled-components"
import { theme } from "../../../theme/index.js"

export default function Main() {
	return (
		<MainStyled>
			Main
		</MainStyled>
	)
}

const MainStyled = styled.div`
	flex: 1;
	background-color: grey;
	width: 100%;
	border-radius: 0 0  ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`