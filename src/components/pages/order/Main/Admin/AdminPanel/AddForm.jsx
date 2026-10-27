import styled from "styled-components"
import InputFields from "./InputFields"
import SubmitButton from "./SubmitButton"
import { useContext  } from "react"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js"

export default function AddForm() {
	const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)

	const handleSubmit = (event) => {
		event.preventDefault()

		const newProductToAdd = {
			...newProduct,
			id : crypto.randomUUID(),
		}

		handleAdd(newProductToAdd)
		setNewProduct(EMPTY_PRODUCT)
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setNewProduct({...newProduct, [name] : value})
	}

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<ImagePreview newProduct={newProduct}/>
			<InputFields handleChange={handleChange} product={newProduct} />
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
