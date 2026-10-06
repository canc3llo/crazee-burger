import { Link, useParams } from 'react-router'
import styled from 'styled-components'

export default function Logout() {
	const {username} = useParams()

	return (
		<NavBarStyled>
			<h1>Bonjour {username}</h1>
			<br/>
			<Link to="/">
				<button>Déconnexion</button>
			</Link>
		</NavBarStyled>
	)
}

const NavBarStyled = styled.div`
	border: 1px solid blue;
	display: flex;
`
