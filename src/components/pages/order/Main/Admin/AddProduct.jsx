import styled from "styled-components"

export default function AddProduct() {
	return (
		<AddProductStyled>
			<div className="img-container">
				1
			</div>
      <div className="info-product">
				2
			</div>
      <div className="btn">
				3
			</div>
		</AddProductStyled>
	)
}

const AddProductStyled = styled.div`
	border : 1px solid red;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 0 20px;
	width: fit-content;

	.img-container{
		width: 215px;
		height: 120px;
		border : 1px solid blue;
	}

	.info-product{
		width: 645px;
		height: 121px;
		border : 1px solid purple;
	}

	.btn{
		width: 275px;
		height: 34px;
		border : 1px solid green;
		grid-column: 2;
		margin-top: 8px;
	}
`
