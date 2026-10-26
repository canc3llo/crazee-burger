import styled from "styled-components"
import { theme } from "../../../../../theme"
import InputFields from "./InputFields"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import ImagePreview from "./ImagePreview.jsx"
import { HiCursorClick } from "react-icons/hi";

export default function EditForm() {
	const { newProduct, setNewProduct, isModeEdit } = useContext(OrderContext)

	return (
		<EditFormStyled>
			{isModeEdit ? (
        <div className="mode-edit">
          <ImagePreview newProduct={newProduct} />
          <InputFields newProduct={newProduct} setNewProduct={setNewProduct} />
          <p>Cliquer sur un produit du menu pour le modifier en temps réel</p>
        </div>
      ) : (
        <div className="click-to-edit">
          <h2>Cliquer sur un produit pour le modifier</h2>
          <HiCursorClick className="icon" />
        </div>
      )}
		</EditFormStyled>
	)
}

const EditFormStyled = styled.div`
	height: 75%;
	width: 65%;
	min-width: 700px;
	

	.click-to-edit{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 50px;
		width: fit-content;
		color: ${theme.colors.greyBlue};
		gap: 0 9px;
		
		h2{
			font-family: Amatic SC, cursive;
			font-weight: ${theme.weights.regular};
			width: fit-content;
			margin: 0;
			font-size: ${theme.fonts.P3};
			
		}

		.icon{
			font-size: ${theme.fonts.P3};
		}
	}
	.mode-edit{
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: repeat(4, 1fr);
		height: 100%;
		width: 100%;
		gap: 0 20px;
		box-sizing: border-box;

		> p{
				font-size: ${theme.fonts.SM};
				border: 1px solid red;
				color: ${theme.colors.primary};
				font-weight: ${theme.weights.regular};
				margin-bottom: 0px;
			}
	}
`
