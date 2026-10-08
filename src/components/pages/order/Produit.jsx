import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

export default function Produit({imageSrc, title, price}) {
	return (
		<ProduitStyled>
			<div className="img-produit">
				<img src={imageSrc}/>
			</div>
			<div className="info-produit">
				<h1>{title}</h1>
				<div className="prix-button">
					<h2>{price} €</h2>
					<PrimaryButton className={"btn-ajouter"} label={"Ajouter"}/>
				</div>
			</div>
		</ProduitStyled>
	)
}

const ProduitStyled = styled.div`
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.extraRound};
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 240px;
	padding: 50px 20px 10px 20px;
	box-sizing: border-box;
	gap: 15px;

	.img-produit{
    height: 100%;
		width: 100%;
    border: 1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;

    img {
      width: 90%;
      object-fit: contain;
    }
  }

	.info-produit{
		height: 100%;
		width: 100%;
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		padding: 0 5px 5px 5px;
		box-sizing: border-box;

		h1{
			border: 1px solid blue;
			margin: 0;
			text-align: left;
			font-family: Amatic SC, cursive;
			font-weight: ${theme.weights.bold};
			font-style: bold;
			font-size: ${theme.fonts.P4};
		}

		.prix-button{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid gray;
		box-sizing: border-box;
		width: 100%;
		height: 100%;

		h2{
			font-weight: 300;
			font-size: 16px;
			color: ${theme.colors.primary};
		}

		.btn-ajouter{
			width: 95px;
			height: 38px;
		}
	}
	}

	
`
