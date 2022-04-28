import { AnyAction } from "redux";
import { IStore } from "./types";

const inititalState = {
	list: [],
};

const chatReducer = (state: IStore = inititalState, action: AnyAction) => {
	switch (action.type) {
		case "chatList/setChatList":
			return { ...state, list: [...action.payload] };
		default:
			return state;
	}
};

export default chatReducer;
