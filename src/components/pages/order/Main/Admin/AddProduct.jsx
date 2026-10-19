import styled from "styled-components"
import AddProductForm from "./AddProductForm"

export default function AddProduct() {
	return (
		<AddProductStyled>
			<div className="img-container">
				1
			</div>

      <AddProductForm/>

		</AddProductStyled>
	)
}

const AddProductStyled = styled.div`
	border : 1px solid red;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 0 20px;
	width: fit-content;
	box-sizing: border-box;

	.img-container{
		width: 215px;
		height: 120px;
		border : 1px solid blue;
		margin-top: -1px;
	}
`
