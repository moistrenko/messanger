import { IStore } from "./types";

export const selectMessage = (state: { messagesReducer: IStore }): IStore["message"] => state.messagesReducer.message;
