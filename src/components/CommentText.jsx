import React from "react";
import { useEffect, useState } from "react";
import { fetchComments } from "../Utils/fetchData";
import { FaThumbsUp } from "react-icons/fa";

const CommentText = ({ review }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchComments(review).then((data) => {
			setComments(data);
		});
	}, [review]);

	return (
		<main>
			{Object.keys(comments).includes("msg") ? (
				<h1 className="text text-normal">No comments available</h1>
			) : (
				comments.map((comment) => (
					<section
						className="container flex w-full px-2 py-3 mb-4 border rounded-lg border-stone-800 h-1/6"
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
									<a className="no-underline link link-accent">Reply</a>
								</div>
							</div>
						</section>
					</section>
				))
			)}
		</main>
	);
};

export default CommentText;
