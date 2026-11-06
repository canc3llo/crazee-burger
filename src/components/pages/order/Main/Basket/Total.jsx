import styled from 'styled-components'
import Banner from '../../../../reusable-ui/Banner'
import { theme } from '../../../../../theme'

export default function Total({amountToPay}) {
	return (
		<Banner>
			<TotalStyled>
				<span className="total">Total</span>
				<span className="amount">{amountToPay}</span>
			</TotalStyled>
		</Banner>
	)
}

const TotalStyled = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${theme.colors.primary};
	font-family: "Amatic SC", cursive;
	font-size: ${theme.fonts.P4};
	font-weight: ${theme.weights.regular};
	letter-spacing: 2px;
`