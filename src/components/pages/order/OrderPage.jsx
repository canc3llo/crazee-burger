import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import NavBar from "./NavBar.jsx"

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="order-page-box">
        <NavBar />
        <div className="order-page-content">
          <h1>Page de commande</h1>
        </div>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  padding: 3vh 2vw;
  box-sizing: border-box;
  background-color: ${theme.colors.primary};

  .order-page-box {
    height: 100%;
		width: 100%;
    display: flex;
    flex-direction: column;
		align-items: center;
  }

  .order-page-content {
    flex: 1;
    background-color: yellow;
		width: 100%;
  }
`