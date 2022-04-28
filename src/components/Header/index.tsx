import React from "react";

import { ITitle } from "interface/ITitle";

import "./style.sass";

const Header = (props: ITitle) => {
	return (
		<div className='header'>
			{props.icon && (
				<div className='header__icon'>
					<img src={props.icon} alt='chat icon' />
				</div>
			)}
			<h2 className='header__title'>{props.title}</h2>
		</div>
	);
};

export default Header;
