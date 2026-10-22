import styled from "styled-components"
import { theme } from "../../../../../theme"
import InputFields from "./InputFields"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import ImagePreview from "./ImagePreview.jsx"
// import { HiCursorClick } from "react-icons/hi";

export default function EditForm() {
	const { newProduct, setNewProduct } = useContext(OrderContext)

	return (
		<EditFormStyled>
			{/* <div className="click-to-edit">
				<h2>Cliquer sur un produit pour le modifier</h2>
				<HiCursorClick className="icon"/>
			</div> */}
			<ImagePreview newProduct={newProduct}/>
			<InputFields newProduct={newProduct} setNewProduct={setNewProduct}/>
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
	border : 1px solid purple;

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

	> p{
			font-size: ${theme.fonts.SM};
			border: 1px solid red;
			color: ${theme.colors.primary};
			font-weight: ${theme.weights.regular};
			margin-bottom: 0px;
		}
`
