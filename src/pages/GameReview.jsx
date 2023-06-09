import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchReviewById, voteReview } from "../Utils/fetchData";
import Spinner from "../components/Spinner";

import { FaComment, FaThumbsUp } from "react-icons/fa";
import CommentText from "../components/CommentText";

const GameReview = () => {
	const { review_id } = useParams();
	const [isVoted, setIsVoted] = useState(false);
	const [review, setReview] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetchReviewById(review_id)
			.then((data) => {
				setReview(data[0]);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err.response.status === 404) {
					navigate("/*");
				}
			});
	}, [review_id]);

	let styles = "p-4 cursor-pointer badge hover:bg-primary";

	const vote = () => {
		if (!isVoted) {
			voteReview(review_id, 1).catch((err) => {
				setErr("Something went wrong, please try again.");
			});
			setReview((prevState) => ({
				...prevState,
				votes: prevState.votes + 1,
			}));
		} else {
			voteReview(review_id, -1).catch((err) => {
				setErr("Something went wrong, please try again.");
			});
			setReview((prevState) => ({
				...prevState,
				votes: prevState.votes - 1,
			}));
		}
		setIsVoted((prevState) => !prevState);
	};

	return (
		<>
			<Navbar />
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<article className="grid items-center justify-center w-9/12 h-screen mx-auto lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-1 place-items-center">
						<main className="flex items-center w-full h-full ">
							<div className="container w-full h-full mx-auto mb-4 border rounded-lg border-stone-800">
								<img
									src={review.review_img_url}
									alt={review.title}
									className="w-full p-8 pb-0 rounded-lg object-fit"
								/>
								<section className="flex flex-col gap-4 p-8 ">
									<h1 className="text-xl font-bold text-primary">
										{review.title}
									</h1>
									<p className="text text-primary">
										{review.designer}
										<span className="ml-4 badge badge-accent badge-outline">
											{review.category}
										</span>
									</p>
									<p className="whitespace-pre-line">{`${review.review_body}`}</p>
									<section className="flex flex-row justify-end gap-2 mb-2">
										<button className={styles}>
											<FaComment size={30} className="p-1 mr-1" />
											{review.comment_count}
										</button>
										<button
											onClick={() => vote()}
											className={!isVoted ? styles : `${styles} bg-primary `}
										>
											<FaThumbsUp size={30} className="p-1 mr-1" />
											{review.votes}
										</button>
									</section>
									{err ? (
										<p className="text-sm text-right text-warning">{err}</p>
									) : null}
								</section>
							</div>
						</main>
						<section className="w-full h-full ml-8 rounded-lg">
							<section className="mt-4 overflow-auto overflow-x-hidden ">
								<CommentText review={review_id} />
							</section>
						</section>
					</article>
					<Footer />
				</>
			)}
		</>
	);
};

export default GameReview;
