import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function BasketProduct({ title}) {
	return (
		<BasketProductStyled>
			<p>{title}</p>
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
