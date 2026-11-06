import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function BasketBody() {
	return (
		<BasketBodyStyled>
			<p>Votre commande est vide.</p>
		</BasketBodyStyled>
	)
}

const BasketBodyStyled = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Amatic SC", cursive;
	font-size: ${theme.fonts.P4};
	font-weight: ${theme.weights.regular};
	color: ${theme.colors.greyBlue};
`
