import styled from "styled-components"
import { theme } from "../../theme/index.js"
import PrimaryButton from "./PrimaryButton.jsx"

export default function Card({imageSrc, title, leftDescription}) {
	return (
		<CardStyled>
			<div className="img-container">
				<img src={imageSrc} alt={title}/>
			</div>
			<div className="description">
				<h1>{title}</h1>
				<div className="bottom-description">
					<h2>{leftDescription}</h2>
					<PrimaryButton className={"btn-ajouter"} label={"Ajouter"}/>
				</div>
			</div>
		</CardStyled>
	)
}

const CardStyled = styled.div`
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.extraRound};
	box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 240px;
	padding: 50px 20px 20px 20px;
	box-sizing: border-box;
	gap: 15px;

	.img-container{
		flex: 1;
		min-height: 0;
		width: 100%;
		position: relative;
		box-sizing: border-box;

    img {
			position: absolute; /* l'image ne fait plus grandir le conteneur */
    	inset: 0;
      height: 100%;
			width: 100%;
      object-fit: contain;
			margin: auto;
			box-sizing: border-box;
    }
  }

	.description{
		flex: 0 0 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 5px 5px 5px;
		gap: 5px;
		box-sizing: border-box;

		h1{
			margin: 0;
			text-align: left;
			font-family: Amatic SC, cursive;
			font-weight: ${theme.weights.bold};
			font-style: bold;
			font-size: ${theme.fonts.P4};
		}

		.bottom-description{
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
  	width: 100%;

			h2{
				font-weight: 300;
				font-size: 16px;
				color: ${theme.colors.primary};
			}

			.btn-ajouter{
				width: 95px;
				height: 38px;
				font-size: ${theme.fonts.XS};
			}
		}
	}
`
