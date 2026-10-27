import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { HiCursorClick } from 'react-icons/hi'

export default function HintMessage() {
	return (
		<HintMessageStyled>
			<h2>Cliquer sur un produit pour le modifier</h2>
			<HiCursorClick className="icon" />
		</HintMessageStyled>
	)
}

const HintMessageStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 50px;
	width: fit-content;
	color: ${theme.colors.greyBlue};
	gap: 0 9px;
	
	h2{
		font-family: Amatic SC, cursive;
		font-weight: ${theme.weights.regular};
		width: fit-content;
		margin: 0;
		font-size: ${theme.fonts.P3};
		
	}

	.icon{
		font-size: ${theme.fonts.P3};
	}
`
