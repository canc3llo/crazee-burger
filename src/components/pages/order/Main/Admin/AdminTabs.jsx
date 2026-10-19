import styled from "styled-components"
import Tab from "./Tab"
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
	const { 
		isCollapsed, 
		setIsCollapsed,
		currentTabSelected,
		setCurrentTabSelected,
	} = useContext(OrderContext)

	const selectTab = (tabSelected) => {
		setIsCollapsed(false)
		setCurrentTabSelected(tabSelected)
	}

	const tabs = getTabsConfig(currentTabSelected, isCollapsed, setIsCollapsed)

	return (
		<AdminTabsStyled>
			{tabs.map((tab) => (
				<Tab
					key={tab.index}
					label={tab.label}
					Icon={tab.Icon}
					onClick={tab.onClick ?? (() => selectTab(tab.index))}
					className={tab.className}
				/>
			))}
		</AdminTabsStyled>
	)
}

const AdminTabsStyled = styled.div`
	display: flex;
	align-items: flex-end;
	height: 44px;
	padding: 0 5%;
	box-sizing: border-box;
	gap: 0 1px;

	.is-active{
		background-color: ${theme.colors.background_dark};
		color: ${theme.colors.white};
		border-color: ${theme.colors.background_dark};
	}
`
