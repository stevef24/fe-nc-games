import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../Utils/fetchData";

import { FaComment, FaThumbsUp } from "react-icons/fa";
const GameReview = () => {
	const { review_id } = useParams();

	const [review, setReview] = useState({});

	useEffect(() => {
		fetchReviewById(review_id).then((data) => {
			setReview(data[0]);
		});
	}, [review_id]);

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
								<div className="p-4 badge hover:bg-primary">
									<FaThumbsUp size={30} className="p-1 mr-1" />
									{review.votes}
								</div>
							</section>
						</section>
					</div>
				</main>
				<div className="w-2/5 h-full border border-primary">
					comments section to come
				</div>
			</article>

			<Footer />
		</>
	);
};

export default GameReview;
