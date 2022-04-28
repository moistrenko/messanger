import { Dispatch } from "redux";
import { getMessageList } from "api/chat/index";
import { IStore } from "./types";

export const setMessageAction = (list: IStore["list"]) => {
	return {
		type: "message/setMessage",
		payload: list,
	};
};
export const setChatIdAction = (chat_id: IStore["chat_id"]) => {
	return {
		type: "chat_id/setChat_id",
		payload: chat_id,
	};
};

export const setChatTitleAction = (chat_id: IStore["chat_id"]) => {
	return {
		type: "chat_title/setChat_title",
		payload: chat_id,
	};
};

export const loadMessage =
	(id: string = "") =>
	async (dispatch: Dispatch) => {
		try {
			const response = await getMessageList(id);
			dispatch(setMessageAction(response.response));
		} catch (e) {
			console.log(e, "Произошла ошибка");
		}
	};
