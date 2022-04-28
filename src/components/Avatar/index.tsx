import { FC } from "react";
import { IAvatar } from "./interface";
import "./style.sass";

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
	const { src, size = "sm" } = props;

	const className = `component-avatar component-avatar--${size}`;

	return (
		<div className={className}>
			<img src={src} alt='avatar' />
		</div>
	);
};
