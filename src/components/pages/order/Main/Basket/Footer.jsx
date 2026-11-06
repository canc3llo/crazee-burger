import styled from 'styled-components'
import Banner from '../../../../reusable-ui/Banner'
import { theme } from '../../../../../theme'

export default function Footer({ span }) {
	return (
		<Banner>
			<FooterStyled>
				<p>{span}</p>
			</FooterStyled>
		</Banner>
	)
}

const FooterStyled = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${theme.colors.white};
	font-family: "Amatic SC", cursive;
	font-size: ${theme.fonts.P2};
	font-weight: ${theme.weights.regular};
`
