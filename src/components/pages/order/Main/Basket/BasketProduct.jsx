import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function BasketProduct({ title, amount}) {
	return (
		<BasketProductStyled>
			<p>{title}</p>
			<p>x{amount}</p>
		</BasketProductStyled>
	)
}

const BasketProductStyled = styled.div`
	background-color: grey;
	width: 100%;
	height: 86px;
	border-radius: ${theme.borderRadius.round};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${theme.colors.white};
`
