import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById, voteReview } from "../Utils/fetchData";

import { FaComment, FaThumbsUp } from "react-icons/fa";
import CommentText from "../components/CommentText";
const GameReview = () => {
	const { review_id } = useParams();

	const [review, setReview] = useState({});

	useEffect(() => {
		fetchReviewById(review_id).then((data) => {
			setReview(data[0]);
		});
	}, [review_id, review]);

	const vote = () => {
		voteReview(review_id);
	};

	return (
		<>
			<Navbar />
			<article className="w-3/4 h-screen mx-auto lg:flex lg:flex-row lg:items-center lg:justify-center flex-cols">
				<main className="flex items-center w-full h-full ">
					<div className="container w-4/6 h-full mx-auto mb-4 border rounded-lg border-stone-800">
						<img
							src={review.review_img_url}
							alt={review.title}
							className="w-full p-8 pb-0 rounded-lg object-fit"
						/>
						<section className="flex flex-col gap-4 p-8 ">
							<h1 className="text-xl font-bold text-primary">{review.title}</h1>
							<p className="text text-primary">
								{review.designer}
								<span className="ml-4 badge badge-accent badge-outline">
									{review.category}
								</span>
							</p>
							<p className="whitespace-pre-line">{`${review.review_body}`}</p>
							<section className="flex flex-row justify-end gap-2 mb-2">
								<div className="p-4 badge hover:bg-primary">
									<FaComment size={30} className="p-1 mr-1" />
									{review.comment_count}
								</div>
								<div
									onClick={() => vote()}
									className="p-4 badge hover:bg-primary"
								>
									<FaThumbsUp size={30} className="p-1 mr-1" />
									{review.votes}
								</div>
							</section>
						</section>
					</div>
				</main>
				<section className="w-full h-full p-2 border lg:w-2/5 border-stone-800">
					<section className=" h-1/6">
						<textarea />
						will be making changes here later
					</section>
					<section className="mt-4 overflow-auto overflow-x-hidden h-4/6">
						<CommentText review={review_id} />
					</section>
				</section>
			</article>

			<Footer />
		</>
	);
};

export default GameReview;
