import { createContext, useReducer } from "react";
import { OptionsContextReducer } from "./OptionsContextReducer";

const INITIAL_STATE = {
	post: [], // this will be used when generating the page in the server
};

export const OptionsContext = createContext(INITIAL_STATE);

export const OptionsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(OptionsContextReducer, INITIAL_STATE);

	return (
		<OptionsContext.Provider value={{ ...state, dispatch }}>{children}</OptionsContext.Provider>
	);
};
