import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ChatItem from "./components/ChatItem";

import {setChatIdAction, setChatTitleAction} from "store/message/actions"

import { IChatList } from "interface/IChatList";

import "./style.sass";

interface IChatListParams {
	list: IChatList[];
}

const ChatItemList: React.FC<IChatListParams> = ({ list }) => {
	const [activeChat, setActiveChat ] = useState('');
	const dispatch = useDispatch()

	const handleChat = (id:string, title:string) => {
		setActiveChat(id)
		dispatch(setChatIdAction(id))
		dispatch(setChatTitleAction(title))
	};

	return (
		<ul className='chat-list'>
			{list.map((chat: IChatList) => (
				<li
					key={chat.id}
					className={`item ${activeChat === chat.id ? "active" : ''}`}
					onClick={() => handleChat(chat.id, chat.title)}
				>
					<ChatItem item={chat} />
				</li>
			))}
		</ul>
	);
};

export default ChatItemList;
