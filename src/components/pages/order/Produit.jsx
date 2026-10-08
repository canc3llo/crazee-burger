import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

export default function Produit() {
	return (
		<ProduitStyled>
			<div className="img-produit">
				<img src="../../../src/assets/img/burger1.png"/>
			</div>
			<div className="info-produit">
				<h1>titre</h1>
				<div className="prix-button">
					<h2>$</h2>
					<PrimaryButton/>
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

    img {
      width: 75%;
      object-fit: contain;
    }
  }

	.info-produit{
		height: 100%;
		width: 100%;
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.prix-button{
		display: flex;
		align-items: center;
		border: 1px solid gray;
		width: 100%;
		gap: 10px;
	}
`
