import styled from 'styled-components'
import { theme } from '../../../../../theme'
import {formatPrice} from '../../../../../utils/maths'

export default function BasketProduct({ title, amount, imageSrc, price }) {
	return (
		<BasketProductStyled>
			<div className="img-container">
				<img src={imageSrc} alt={title}/>
			</div>
			<div className="description">
				<h1>{title}</h1>
				<h2>{formatPrice(price)}</h2>
			</div>
			<div className="amount">
				<p>x {amount}</p>
			</div>
		</BasketProductStyled>
	)
}

const BasketProductStyled = styled.div`
	background-color: grey;
	width: 100%;
	height: 86px;
	border-radius: ${theme.borderRadius.round};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	color: ${theme.colors.white};
	padding: 8px 16px;
	box-sizing: border-box;

	.img-container{
		width: 85px;
		height: 70px;
		position: relative;
		flex-shrink: 0;

		img {
			position: absolute;
			inset: 0;
			height: 100%;
			width: 100%;
			object-fit: contain;
			margin: auto;
			box-sizing: border-box;
		}
	}

	.description{
		margin-left: 20px;
		margin-right: 20px;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-width: 0;

		h1{
			font-family: "Amatic SC", cursive;
			font-size: ${theme.fonts.P3};
			font-weight: ${theme.weights.bold};
			color: ${theme.colors.dark};
			margin: 0;
			white-space: nowrap;
  		overflow: hidden;
  		text-overflow: ellipsis;
			border : 1px solid blue;
			min-height: 1.2em;   /* réserve la place d'une ligne même si vide */
  		line-height: 1.2;
		}

		h2{
			font-size: ${theme.fonts.SM};
			font-weight: ${theme.weights.light};
			color: ${theme.colors.primary};
			margin: 0;
			border : 1px solid red;	
		}
	}

	.amount{
		margin-right: 20px;

		> p{
			font-size: ${theme.fonts.SM};
			font-weight: ${theme.weights.light};
			color: ${theme.colors.primary};
			margin: 0;
		}
	}
`
