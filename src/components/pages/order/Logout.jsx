import { Link, useParams } from 'react-router'
import styled from 'styled-components'
import { theme } from '../../../theme/index.js'
import { BsPersonCircle } from 'react-icons/bs'

export default function Logout() {
	const {username} = useParams()

	return (
		<LogoutStyled>
			<div className="info">
					<h1>
						Hey, <span>{username}</span>
					</h1>
					<Link to="/">
						<button>Se déconnecter</button>
					</Link>
			</div>
			<BsPersonCircle className="icon" />
		</LogoutStyled>
	)
}

const LogoutStyled = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 10px;

	.info{
		display: flex;
		align-items: end;
		flex-direction: column;
	}

	h1{
		color : ${theme.colors.greyDark};
		font-size: ${theme.fonts.P0};
		font-weight: ${theme.weights.regular};
		margin: 2px 0;

		span{
		color: ${theme.colors.primary};
		font-weight: ${theme.weights.medium};
		}
	}

	button{
		background-color: ${theme.colors.white};
		border: none;
		color : ${theme.colors.greyDark};
		font-size: ${theme.fonts.XXS};
		margin: 0;
		padding: 0;

		&:hover{
			text-decoration: underline;
			cursor: pointer;
		}
	}

	.icon{
		color: ${theme.colors.greyDark};
		font-size: ${theme.fonts.P4};
	}
`
