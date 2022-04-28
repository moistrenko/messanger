import { Dispatch } from "redux";
import { getChatList } from "api/chat/index";
import { IStore } from "./types";

export const setChatListAction = (list: IStore["list"]) => {
	return {
		type: "chatList/setChatList",
		payload: list,
	};
};

export const loadChatList = () => async (dispatch: Dispatch) => {
	try {
		const response = await getChatList();
		dispatch(setChatListAction(response.response));
	} catch (e) {
		console.log(e, "Произошла ошибка");
	}
};
