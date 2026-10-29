import styled from "styled-components"
import { theme } from "../../../../../../theme"
import InputFields from "./InputFields"
import { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"

export default function EditForm() {
	const { productSelected, setProductSelected, handleEdit, editTitleRef } = useContext(OrderContext)

	const handleChange = (event) => {
		const {name, value} = event.target
		const prodBeingEdited = {...productSelected, [name] : value}
		setProductSelected(prodBeingEdited)
		handleEdit(prodBeingEdited)
	}

	return (
		<EditFormStyled>
			<ImagePreview product={productSelected} />
			<InputFields product={productSelected} onChange={handleChange} ref={editTitleRef}/>
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
		color: ${theme.colors.primary};
		font-weight: ${theme.weights.regular};
		margin-bottom: 0px;
	}
`
