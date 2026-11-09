import styled from 'styled-components'
import { theme } from '../../../../../theme'
import {formatPrice} from '../../../../../utils/maths'
import { MdDeleteForever } from 'react-icons/md'
import comingsoon from "../../../../../assets/img/coming-soon.png"

export default function BasketCard({ title, amount, imageSrc, price, onDelete }) {
	return (
		<BasketCardStyled>
			<div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
			<div className="img-container">
				<img src={imageSrc || comingsoon} alt={title}/>
			</div>
			<div className="description">
				<h1>{title}</h1>
				<h2>{formatPrice(price)}</h2>
			</div>
			<div className="amount">
				<p>x {amount}</p>
			</div>
		</BasketCardStyled>
	)
}

const BasketCardStyled = styled.div`
	position: relative;
	background-color: ${theme.colors.white};
	box-shadow: ${theme.shadows.cardBasket};
	width: 100%;
	height: 86px;
	border-radius: ${theme.borderRadius.round};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
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
		user-select: none;

		h1{
			font-family: "Amatic SC", cursive;
			font-size: ${theme.fonts.P3};
			font-weight: ${theme.weights.bold};
			color: ${theme.colors.dark};
			margin: 0;
			white-space: nowrap;
  		overflow: hidden;
  		text-overflow: ellipsis;
			min-height: 1.2em;   /* réserve la place d'une ligne même si vide */
  		line-height: 1.2;
		}

		h2{
			font-size: ${theme.fonts.SM};
			font-weight: ${theme.weights.light};
			color: ${theme.colors.primary};
			margin: 0;
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

	.delete-button {
    display: none;
    z-index: 1;
  }

	&:hover {
    .delete-button {
      /* border: 1px solid red; */
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.P3};
        height: ${theme.fonts.P3};
      }

      /* behaviour on delete-button hover */
      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
	}
`
