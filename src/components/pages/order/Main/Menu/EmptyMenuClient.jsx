import styled from 'styled-components'
import { theme } from "../../../../../theme/index.js"

export default function EmptyMenuClient() {
	return (
		<EmptyMenuClientStyled>
			<h1>Victime de notre succès ! :D</h1>
			<h2>De nouvelles recettes sont en cours de préparation.</h2>
			<h2>À très vite !</h2>
		</EmptyMenuClientStyled>
	)
}

const EmptyMenuClientStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1{
		font-family: Amatic SC, cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P4};
		color: ${theme.colors.greyBlue};
		margin-bottom: 21px;
		margin-top: 0;
	}

	h2{
		font-family: Amatic SC, cursive;
		font-weight: ${theme.weights.regular};
		font-size: ${theme.fonts.P4};
		color: ${theme.colors.greyBlue};
		margin-bottom: 21px;
		margin-top: 0;
	}
`