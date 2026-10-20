import styled from "styled-components"
import InputFields from "./InputFields"
import SubmitButton from "./SubmitButton"
import { useContext, useState } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"

const EMPTY_PRODUCT = {
	id : "",
	title : "",
	imageSource: "",
	price : 0,
}

export default function AddForm() {
	const { handleAdd } = useContext(OrderContext)
	const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

	const handleSubmit = (event) => {
		event.preventDefault()

		const newProductToAdd = {
			...newProduct,
			id : crypto.randomUUID(),
		}

		handleAdd(newProductToAdd)
		setNewProduct(EMPTY_PRODUCT)
	}

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<div className="img-preview">
				{newProduct.imageSource ? ( 
					<img src={newProduct.imageSource} alt={newProduct.imageSource} /> 
				) : (
					<div>Aucune Image</div>
				)}
			</div>
			<InputFields newProduct={newProduct} setNewProduct={setNewProduct}/>
			<SubmitButton/>
		</AddFormStyled>
	)
}

const AddFormStyled = styled.form`
	border : 1px solid red;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: repeat(4, 1fr);
	height: 75%;
	width: 60%;
	min-width: 600px;
	gap: 0 20px;
	box-sizing: border-box;

	.img-preview{
		grid-area: 1 / 1 / 4 / 2;
		border : 1px solid blue;
		margin-top: -1px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		img{
			position: absolute;
    	inset: 0;
      height: 100%;
			width: 100%;
      object-fit: contain;
			margin: auto;
			box-sizing: border-box;
		}
	}
`
