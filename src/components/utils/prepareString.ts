export const prepareString = (value: string, type: string) => {
	let textValue = value;
	if (type === "title") {
		return textValue.length > 20 ? textValue.substring(0, 20) + "..." : textValue;
	} else {
		return textValue.length > 50 ? textValue.substring(0, 50) + "..." : textValue;
	}
};
