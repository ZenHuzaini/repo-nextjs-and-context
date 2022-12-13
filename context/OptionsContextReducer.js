import { contextType } from "./contextTypes";

export const OptionsContextReducer = (state, { type, data }) => {
	switch (type) {
		case contextType.TEMP_SELECTED_POST: {
			return { ...state, post: data };
		}

		default: {
			return state;
		}
	}
};
