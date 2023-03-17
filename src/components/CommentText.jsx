import React from "react";
import { useEffect, useState, useContext } from "react";
import { deleteComment, fetchComments } from "../Utils/fetchData";
import { FaThumbsUp, FaTrash } from "react-icons/fa";
import Spinner from "../components/Spinner";
import TextArea from "./TextArea";
import { UserContext } from "../Utils/Context/UserContext";

const CommentText = ({ review }) => {
	const { isLoggedIn } = useContext(UserContext);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		fetchComments(review).then((data) => {
			setComments(data);
			setIsLoading(false);
		});
	}, [review, counter]);

	const deleteAndUpdate = (commentId) => {
		deleteComment(commentId).then(() => {
			setCounter((prevState) => prevState + 1);
		});
	};
	return (
		<main>
			<section className="mb-12 ">
				<TextArea setComments={setComments} />
			</section>
			{Object.keys(comments).includes("msg") ? (
				<h1 className="text text-normal">No comments available</h1>
			) : isLoading ? (
				<Spinner isLoading={isLoading} />
			) : (
				comments.map((comment) => (
					<section
						className="container flex w-full px-2 py-3 mb-4 border rounded-lg border-stone-800 h-/6"
						key={comment.comment_id}
					>
						<div className="avatar placeholder">
							<div className="w-20 rounded-full h-fit bg-neutral-focus text-neutral-content">
								<span className="text-3xl">
									{comment.author[0].toUpperCase()}
								</span>
							</div>
						</div>
						<section className="flex flex-row w-full gap-10 ml-2 lg:flex-col">
							<p className="overflow-hidden h-fit w-fit">{comment.body}</p>
							<div className="flex items-end justify-end gap-1 lg:flex-row ">
								<div className="badge hover:bg-primary">
									<FaThumbsUp size={20} className="p-1 mr-1" />
									{comment.votes}
								</div>
								<div className="badge">
									<p href="#" className="no-underline link link-accent">
										Reply
									</p>
								</div>
								{isLoggedIn && comment.author === "grumpy19" && (
									<div
										onClick={() => {
											deleteAndUpdate(comment.comment_id);
										}}
									>
										<FaTrash className="ml-2 text-red-500 opacity-50 hover:cursor-pointer " />
									</div>
								)}
							</div>
						</section>
					</section>
				))
			)}
		</main>
	);
};

export default CommentText;
