import styled from "styled-components"
import InputFields from "./InputFields"
import SubmitButton from "./SubmitButton"

export default function AddForm() {
	return (
		<AddFormStyled>
			<div className="img-container">
				1
			</div>
			<div className="input-button">
				<InputFields/>
				<SubmitButton/>
			</div>
		</AddFormStyled>
	)
}

const AddFormStyled = styled.div`
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
	
	.input-button{
		display: flex;
		flex-direction: column;
	}
`
