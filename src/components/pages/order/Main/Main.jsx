import styled from "styled-components"
import Menu from "./Menu.jsx"
// import Basket from "./Basket.jsx"
import { theme } from "../../../../theme/index.js"

export default function Main() {
	return (
		<MainStyled>
			{/* <Basket/> */}
			<Menu/>
		</MainStyled>
	)
}

const MainStyled = styled.div`
	flex: 1;
	background-color: ${theme.colors.background_white};
	width: 100%;
	border-bottom-left-radius: ${theme.borderRadius.extraRound};
	border-bottom-right-radius: ${theme.borderRadius.extraRound};
	box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
	box-sizing: border-box;
	overflow-y: scroll;
	overflow-x: hidden;

	display: grid;
	grid-template-columns: 1fr;
`