import { IStore } from "./types";

export const selectList = (state: { chatReducer: IStore }): IStore["list"] => state.chatReducer.list;
