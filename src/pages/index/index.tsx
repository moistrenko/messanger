import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectList } from "store/chat/selectors";
import { loadChatList } from "store/chat/actions";
import { selectMessage, selectChatId, selectChatTitle } from "store/message/selectors";
import { loadMessage } from "store/message/actions";

import Warning from "components/Warning";
import Header from "components/Header";
import ChatItemList from "components/ChatItemList";
import Message from "components/Message";
import Input from "components/Input";

import icon from "assets/img/chat-icon.png";

import "./style.sass";

const PageIndex = () => {
	const isMobile = window.matchMedia("only screen and (max-width: 700px)").matches;

	const dispatch = useDispatch();

	const chatList = useSelector(selectList);
	const message = useSelector(selectMessage);
	const chat_id = useSelector(selectChatId);
	const chat_title = useSelector(selectChatTitle);

	useEffect(() => {
		dispatch(loadChatList() as any);
	}, [dispatch]);

	useEffect(() => {
		if (chat_id) {
			dispatch(loadMessage(chat_id) as any);
		}
	}, [dispatch, chat_id]);

	return (
		<main className='main'>
			{isMobile ? (
				<Warning />
			) : (
				<>
					<div className='users-list users-list-wrapper'>
						<Header title='All chats' />
						{chatList.length > 0 ? (
							<ChatItemList list={chatList} />
						) : (
							<h3 className='users-list__empty'>Список чатов пуст</h3>
						)}
					</div>
					<div className='chat-wrapper'>
						<Header title={chat_title} icon={icon} />
						<div className='chat-content'>
							{message.length > 0 ? (
								message.reverse().map((message) => {
									return <Message key={message.id} message={message} />;
								})
							) : (
								<div className='message-empty'>Выберите чат</div>
							)}
						</div>
						<Input />
					</div>
				</>
			)}
		</main>
	);
};

export default PageIndex;
