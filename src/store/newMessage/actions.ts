import { IStore } from "./types";

export const setNewMessageAction = (message: IStore["message"]) => {
	return {
		type: "message/setMessage",
		payload: message,
	};
};
