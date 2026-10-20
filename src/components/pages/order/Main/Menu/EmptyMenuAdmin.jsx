import styled from 'styled-components'
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx"
import { theme } from "../../../../../theme/index.js"
import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext.jsx'

export default function EmptyMenuAdmin() {
	const { resetMenu } = useContext(OrderContext)

	return (
		<EmptyMenuAdminStyled>
			<h1>Le menu est vide ?</h1>
			<h2>Cliquez ci-dessous pour le réinitialiser</h2>
			<PrimaryButton 
				label={"Générer de nouveaux produits"} 
				onClick={resetMenu} 
				className={"btn-reset"}/>
		</EmptyMenuAdminStyled>
	)
}

const EmptyMenuAdminStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1{
		font-family: Amatic SC, cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P4};
		color: ${theme.colors.greyBlue};
		margin: 0;
	}

	h2{
		font-family: Amatic SC, cursive;
		font-weight: ${theme.weights.regular};
		font-size: ${theme.fonts.P4};
		color: ${theme.colors.greyBlue};
		margin-top: 21px;
		margin-bottom: 31px;
	}

	.btn-reset{
		height: 50px;
		width: 224px;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.XS};
	}
`
