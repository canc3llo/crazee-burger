import styled from "styled-components"
import Card from "../../../reusable-ui/Card.jsx"
import { formatPrice } from "../../../../utils/maths.js"
import OrderContext from "../../../../context/OrderContext.jsx"
import { useContext } from "react"
import PrimaryButton from "../../../reusable-ui/PrimaryButton.jsx"
import { theme } from "../../../../theme/index.js"

const IMAGE_BY_DEFAULT = "/src/assets/img/coming-soon.png"

export default function Menu() {
	const {menu, isModeAdmin, handleDelete, resetMenu } = useContext(OrderContext)


	if (menu.length === 0) return ( 
		<MenuVideStyled>
			<h1>Le menu est vide ?</h1>
			<h2>Cliquez ci-dessous pour le réinitialiser</h2>
			<PrimaryButton 
				label={"Générer de nouveaux produits"} 
				onClick={resetMenu} 
				className={"btn-reset"}/>
		</MenuVideStyled>
	)
	
	return (
		<MenuStyled>
			{menu.map(({id, imageSource, title, price}) => {
				return (
					<Card
						key={id} 
						imageSrc={imageSource ? imageSource : IMAGE_BY_DEFAULT} 
						title={title} 
						leftDescription={formatPrice(price)}
						hasDeleteButton={isModeAdmin}
						onDelete={() => handleDelete(id)}
					/>
				)
			})}
		</MenuStyled>
	)
}

const MenuStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-auto-rows: 330px;
	padding: 50px 90px 150px;
	gap: 60px;
	justify-items: center;
	box-sizing: border-box;
	overflow-y: scroll;
`

const MenuVideStyled = styled.div`
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
