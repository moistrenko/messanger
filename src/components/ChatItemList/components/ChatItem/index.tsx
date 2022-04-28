import React from "react";
import dayjs from "dayjs";

import { Avatar } from "components/Avatar";
import { IChatList } from "interface/IChatList";

import {prepareString} from "components/utils/prepareString";

import "./style.sass";

interface IChatItemParams {
	item: IChatList;
}

const ChatItem: React.FC<IChatItemParams> = ({ item }) => {
	const title = prepareString(item.title, 'title');
	const message = prepareString(item.last_message.message, 'last-message');
	return (
			<div className='item__link'>
				<Avatar src={item.avatar} size='sm' />
				<div className='item__chat'>
					<div className='title-group'>
						<h4 className='title-group__title'>{title}</h4>
						<span className='title-group__time'>{dayjs(item.last_message.created_at).format("HH:mm")}</span>
					</div>
					<div className='item__last-message'>{message}</div>
				</div>
			</div>
	);
};

export default ChatItem;
