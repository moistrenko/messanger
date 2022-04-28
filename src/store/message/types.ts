import { IMessage } from "interface/IMessage";

export interface IStore {
	list: IMessage[];
	chat_id: string;
	chat_title: string;
}
