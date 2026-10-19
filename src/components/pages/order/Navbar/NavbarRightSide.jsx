import Logout from "./Logout.jsx"
import styled from "styled-components"
import ToggleButton from "../../../reusable-ui/ToggleButton.jsx"
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin.jsx";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext.jsx";

export default function NavbarRightSide() {
	const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext) 

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
				isChecked={isModeAdmin}
				labelIfUnchecked="ACTIVER LE MODE ADMIN"
				labelIfChecked="DÉSACTIVER LE MODE ADMIN"
				onToggle={displayToastNotification}/>
			<Logout/>
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
