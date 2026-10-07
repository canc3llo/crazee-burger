import styled from "styled-components"
import { theme } from "../../../theme/index.js"

export default function Produit() {
	return (
		<ProduitStyled>Produit</ProduitStyled>
	)
}

const ProduitStyled = styled.div`
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.extraRound};
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
`
