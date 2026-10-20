import styled from "styled-components"
import InputFields from "./InputFields"
import SubmitButton from "./SubmitButton"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"

export default function AddForm() {
	const { menu, setMenu } = useContext(OrderContext)

	const newProduct = {
		id : new Date().getTime(),
		title : "Nouveau produit",
		imageSource: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2240,c_limit/basically-burger-1.jpg",
		price: "3.5",
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const menuCopy = [...menu]
		const menuUpdated = [newProduct, ...menuCopy]
		setMenu(menuUpdated)
	}

	return (
		<AddFormStyled onSubmit={handleSubmit}>
			<div className="img-preview">
				img
			</div>
			<InputFields/>
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
	}
`
