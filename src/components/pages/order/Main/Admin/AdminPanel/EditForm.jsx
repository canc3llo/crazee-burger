import styled from "styled-components"
import { theme } from "../../../../../theme"
import InputFields from "./InputFields"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import ImagePreview from "./ImagePreview.jsx"

export default function EditForm() {
	const { editProduct, setEditProduct } = useContext(OrderContext)

	return (
		<EditFormStyled>
			<ImagePreview newProduct={editProduct} />
			<InputFields newProduct={editProduct} setNewProduct={setEditProduct} />
			<p>Cliquer sur un produit du menu pour le modifier en temps réel</p>
		</EditFormStyled>
	)
}

const EditFormStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: repeat(4, 1fr);
	height: 75%;
	width: 65%;
	min-width: 700px;
	gap: 0 20px;
	box-sizing: border-box;

	> p{
		font-size: ${theme.fonts.SM};
		border: 1px solid red;
		color: ${theme.colors.primary};
		font-weight: ${theme.weights.regular};
		margin-bottom: 0px;
	}
	

	/* .click-to-edit{
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
	} */
`
