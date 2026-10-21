import styled from "styled-components"
import InputFields from "./InputFields"
import SubmitButton from "./SubmitButton"
import { useContext  } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { theme } from "../../../../../theme/index.js"

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
			<div className="img-preview">
				{newProduct.imageSource ? ( 
					<img src={newProduct.imageSource} alt={newProduct.imageSource} /> 
				) : (
					<p>Aucune image</p>
				)}
			</div>
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

	.img-preview{
		grid-area: 1 / 1 / 5 / 2;
		border : 1px solid ${theme.colors.greyLight};
		margin-top: -1px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: ${theme.borderRadius.round};

		img{
			position: absolute;
    	inset: 0;
      height: 100%;
			width: 100%;
      object-fit: contain;
			margin: auto;
			box-sizing: border-box;
		}

		p{
			color: ${theme.colors.greySemiDark};
			font-size: ${theme.fonts.P0};
			font-weight: ${theme.weights.regular};
		}
	}
`
