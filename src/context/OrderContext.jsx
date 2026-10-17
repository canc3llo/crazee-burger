import { createContext } from "react";

export default createContext({
	isModeAdmin: false,
	setIsModeAdmin: () => {},

	isCollapsed: false,
	setIsCollapsed: () => {},

	isEditTab: true,
	setIsEditTab: () => {},

	isAdTab: false,
	setIsAdTab: () => {}
})