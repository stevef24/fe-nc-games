import React from "react";

const TextArea = () => {
	return (
		<form action="" className="flex flex-col">
			<textarea
				className="h-40 mb-10 textarea textarea-secondary"
				placeholder="type here"
			></textarea>
			<button>Send</button>
		</form>
	);
};

export default TextArea;
