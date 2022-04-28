import { AnyAction } from "redux";
import { IStore } from "./types";

const inititalState = {
	message: "",
};

const messagesReducer = (state: IStore = inititalState, action: AnyAction) => {
	switch (action.type) {
		case "message/setMessage":
			return { ...state, list: [...action.payload] };
		default:
			return state;
	}
};

export default messagesReducer;
