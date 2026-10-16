import styled from "styled-components"
import Menu from "./Menu.jsx"
// import Basket from "./Basket.jsx"
import { theme } from "../../../../theme/index.js"
import Admin from "./Admin/Admin.jsx"
import OrderContext from "../../../../context/OrderContext.jsx"
import { useContext } from "react"

export default function Main() {
	const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)

	return (
		<MainStyled>
			{/* <Basket/> */}
			<div className="menu-and-admin">
				<Menu/>
				{isModeAdmin && <Admin/>}
			</div>
		</MainStyled>
	)
}

const MainStyled = styled.div`
	position: relative;   /* repère pour Admin */
  flex: 1;
  background-color: ${theme.colors.background_white};
  width: 100%;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  box-sizing: border-box;
  overflow: hidden;     /* ← plus de scroll ici, et ça respecte les coins arrondis */
  border-bottom: solid 0.1px ${theme.colors.greyLight};
	height: 100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: 1fr;

	.menu-and-admin{
		position: relative;
		overflow-y: hidden;
		display: grid;
	}
	/* .scrollable{
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		display: grid;
		grid-template-columns: 25% 1fr;
	} */
`