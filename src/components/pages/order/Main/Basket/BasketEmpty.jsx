import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function BasketEmpty() {
	return (
		<BasketEmptyStyled>
			<p>Votre commande est vide.</p>
		</BasketEmptyStyled>
	)
}

const BasketEmptyStyled = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: ${theme.fonts.P4};
	font-weight: ${theme.weights.regular};
	color: ${theme.colors.greyBlue};
	padding: 0 16px;
	box-sizing: border-box;
	gap: 20px;
	font-family: "Amatic SC", cursive;
`
