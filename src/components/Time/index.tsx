import React from "react";
import dayjs from "dayjs";

import "./style.sass";

interface ITimeParams {
	time: number;
}

const Time: React.FC<ITimeParams> = ({ time }) => {
	return <div className='time'>{dayjs(time).format("DD.MM.YYYY")}</div>;
};

export default Time;
