import styled from "styled-components"
import AdminPanel from "./AdminPanel"
import AdminTabs from "./AdminTabs"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"

export default function Admin() {
	const {isCollapsed} = useContext(OrderContext)

	return (
		<AdminStyled>
			<AdminTabs />
			{!isCollapsed && <AdminPanel/>}
		</AdminStyled>
	)
}

const AdminStyled = styled.div`
	width: 100%;
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
  left: 0;
	right: 0;
	z-index: 3;
`
