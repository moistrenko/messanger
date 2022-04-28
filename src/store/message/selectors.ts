import { IStore } from "./types";

export const selectMessage = (state: {messageReducer: IStore}): IStore['list'] => state.messageReducer.list
export const selectChatId = (state: {messageReducer: IStore}): IStore['chat_id'] => state.messageReducer.chat_id
export const selectChatTitle = (state: {messageReducer: IStore}): IStore['chat_title'] => state.messageReducer.chat_title