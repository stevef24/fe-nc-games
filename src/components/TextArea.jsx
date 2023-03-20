import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaSmile, FaImage } from "react-icons/fa";
import { postComment } from "../Utils/fetchData";
import { useContext } from "react";
import { UserContext } from "../Utils/Context/UserContext";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const TextArea = ({ setComments }) => {
	const { review_id } = useParams();
	const [newComment, setNewComment] = useState("");
	const { user } = useContext(UserContext);

	const notify = () => toast.success("Comment posted");
	const errorNotify = () =>
		toast.error("sorry, there has been a problem, please try again");

	const handleSubmit = (e) => {
		e.preventDefault();
		postComment(review_id, newComment, user)
			.then((data) => {
				if (data === undefined) {
					errorNotify();
				} else {
					notify();
					setComments((prevComments) => [data.data.comments, ...prevComments]);
				}
			})
			.catch((err) => errorNotify());
		setNewComment("");
	};

	return (
		<form
			action=""
			className="flex flex-col "
			onSubmit={handleSubmit}
			method="post"
		>
			<textarea
				className="h-40 m-4 resize-none textarea textarea-primary"
				placeholder="type here"
				onChange={(e) => {
					setNewComment(e.target.value);
				}}
				value={newComment}
				rows="10"
				cols="50"
				maxLength={200}
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
			</div>
		</form>
	);
};

export default TextArea;
