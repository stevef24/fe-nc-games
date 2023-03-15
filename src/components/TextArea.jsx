import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaSmile, FaImage } from "react-icons/fa";
import { postComment } from "../Utils/fetchData";
import { useContext } from "react";
import { UserContext } from "../Utils/Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextArea = ({ reviewId }) => {
	const { user } = useContext(UserContext);
	const [comment, setComment] = useState("");

	const notify = () => toast.success("Comment posted");
	const errorNotify = () =>
		toast.warn("sorry, there has been a problem, please try again");

	const handleSubmit = (e) => {
		e.preventDefault();
		postComment(reviewId, comment, user)
			.then((data) => notify())
			.catch((err) => errorNotify());
		setComment("");
	};

	return (
		<form
			action=""
			className="flex flex-col "
			onSubmit={handleSubmit}
			method="post"
		>
			<textarea
				className="h-40 mb-4 resize-none textarea textarea-primary"
				placeholder="type here"
				value={comment}
				onChange={(e) => {
					setComment(e.target.value);
				}}
				rows="10"
				cols="50"
				maxlength={200}
				required
			></textarea>
			<div className="flex justify-center gap-8">
				<div className="flex flex-row items-center gap-4">
					<FaPaperclip size={25} />
					<FaImage size={25} />
					<FaSmile size={25} />
				</div>
				<button type="submit" className="w-1/3 btn btn-outline btn-primary">
					Send <FaPaperPlane className="ml-2" />
				</button>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</div>
		</form>
	);
};

export default TextArea;
