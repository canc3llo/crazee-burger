import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function ImagePreview({newProduct}) {
	return (
		<ImagePreviewStyled>
			{newProduct.imageSource ? ( 
					<img src={newProduct.imageSource} alt={newProduct.imageSource} /> 
				) : (
					<p>Aucune image</p>
				)
			}
		</ImagePreviewStyled>
	)
}

const ImagePreviewStyled = styled.div`
	grid-area: 1 / 1 / 5 / 2;
	border : 1px solid ${theme.colors.greyLight};
	margin-top: -1px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${theme.borderRadius.round};

	img{
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		object-fit: contain;
		margin: auto;
		box-sizing: border-box;
	}

	p{
		color: ${theme.colors.greySemiDark};
		font-size: ${theme.fonts.P0};
		font-weight: ${theme.weights.regular};
	}
`
