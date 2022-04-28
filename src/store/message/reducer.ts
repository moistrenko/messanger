import { AnyAction } from "redux";
import { IStore } from "./types";

const inititalState = {
	list: [],
	chat_id: "",
	chat_title: "",
};

const messageReducer = (state: IStore = inititalState, action: AnyAction) => {
	switch (action.type) {
		case "message/setMessage":
			return { ...state, list: [...action.payload] };
		case "chat_id/setChat_id":
			return { ...state, chat_id: action.payload };
		case "chat_title/setChat_title":
			return { ...state, chat_title: action.payload };
		default:
			return state;
	}
};

export default messageReducer;
