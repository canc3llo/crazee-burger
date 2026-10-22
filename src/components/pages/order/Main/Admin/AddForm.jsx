import styled from "styled-components"
import InputFields from "./InputFields"
import SubmitButton from "./SubmitButton"
import { useContext  } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { theme } from "../../../../../theme/index.js"
import ImagePreview from "./ImagePreview.jsx"

export default function AddForm() {
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)

	const handleSubmit = (event) => {
		event.preventDefault()

		const newProductToAdd = {
			...newProduct,
			id : crypto.randomUUID(),
		}

		handleAdd(newProductToAdd)
		setNewProduct(theme.EMPTY_PRODUCT)
	}

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<ImagePreview newProduct={newProduct}/>
			<InputFields newProduct={newProduct} setNewProduct={setNewProduct}/>
			<SubmitButton/>
		</AddFormStyled>
	)
}

const AddFormStyled = styled.form`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: repeat(4, 1fr);
	height: 75%;
	width: 65%;
	min-width: 700px;
	gap: 0 20px;
	box-sizing: border-box;
`
