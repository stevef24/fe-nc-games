import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import Spinner from "./Spinner";
import { useState, useEffect } from "react";
import { fetchComments } from "../Utils/fetchData";
import { useParams } from "react-router";
import TextArea from "./TextArea";

const CommentSection = () => {
	const { review_id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [comments, setComments] = useState([]);
	console.log(comments);

	useEffect(() => {
		fetchComments(review_id).then((data) => {
			setComments(data);
			setIsLoading(false);
		});
	}, [review_id]);

	return (
		<main>
			<section className="p-4 mb-10 ">
				<TextArea setComments={setComments} />
			</section>
			{Object.keys(comments).includes("msg") ? (
				<h1 className="text text-normal">No comments available</h1>
			) : isLoading ? (
				<Spinner isLoading={isLoading} />
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

export default CommentSection;
