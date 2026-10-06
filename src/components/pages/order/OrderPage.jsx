import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Navbar from "./Navbar.jsx"
import Main from "./Main.jsx"

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  box-sizing: border-box;
  background-color: ${theme.colors.primary};
	display: flex;
	align-items: center;
	justify-content: center;

  .container {
    height: 95vh;
		width: 1400px; // use vw? 
    display: flex;
    flex-direction: column;
		align-items: center;
  }
`