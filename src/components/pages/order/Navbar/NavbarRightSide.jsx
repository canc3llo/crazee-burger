import Logout from "./Logout.jsx"
import styled from "styled-components"
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx"
import { useState } from "react";
import ToastAdmin from "./ToastAdmin.jsx";
import { toast } from "react-toastify";

export default function NavbarRightSide({ username }) {
	const [isModeAdmin, setIsModeAdmin] = useState(false)

	const displayToastNotification = () =>{
		if (!isModeAdmin){
			toast.info("Mode admin activé", {
			// icon: <FaUserSecret size={30} />,
			theme: "dark",
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined, 
			})
		}
		setIsModeAdmin(!isModeAdmin) 
	}

	return (
		<NavbarRightSideStyled>
			<ToggleButton
				labelIfUnchecked="ACTIVER LE MODE ADMIN"
				labelIfChecked="DÉSACTIVER LE MODE ADMIN"
				onToggle={displayToastNotification}/>
			<Logout username={username}/>
			<ToastAdmin/>
		</NavbarRightSideStyled>
	)
}

const NavbarRightSideStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 50px;
`
