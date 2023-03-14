import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaComment, FaThumbsUp } from "react-icons/fa";
const GameReview = () => {
	const { review_id } = useParams();

	const [review, setReview] = useState({});

	useEffect(() => {
		axios
			.get(`https://be-nc-games-leks.onrender.com/api/reviews/${review_id}`)
			.then(({ data: { review } }) => {
				setReview(review[0]);
			});
	}, []);

	return (
		<>
			<Navbar />
			<div className="w-3/4 h-screen mx-auto lg:flex lg:flex-row lg:items-center lg:justify-center flex-cols">
				<div className="flex items-center w-full h-full ">
					<div className="container w-4/6 h-full mx-auto mb-4 border rounded-lg border-stone-800">
						<img
							src={review.review_img_url}
							alt={review.title}
							className="w-full p-8 pb-0 rounded-lg object-fit"
						/>
						<div className="flex flex-col gap-4 p-8 ">
							<h1 className="text-xl font-bold text-primary">{review.title}</h1>
							<p className="text text-primary">
								{review.designer}
								<span className="ml-4 badge badge-accent badge-outline">
									{review.category}
								</span>
							</p>
							<p className="whitespace-pre-line">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
								numquam vel sed temporibus accusantium, eum iste recusandae
								quasi excepturi quibusdam cumque adipisci nam sapiente est
								tempora error ipsum voluptate minus placeat delectus at? Quasi
								nulla veniam perferendis asperiores? Corrupti unde facilis eius
								aut rem, fugiat cupiditate sequi adipisci enim nihil, vero
								perferendis sapiente saepe iste sunt est itaque impedit
								veritatis mollitia quaerat, velit quia?
								<br />
								<br />
								Fugit autem animi obcaecati maxime, sequi tempore labore culpa
								hic officiis doloribus ducimus consequatur eaque et odio, quidem
								nemo sapiente! Id accusamus aliquid necessitatibus et, eum non
								mollitia, optio, doloribus rerum hic corporis fuga ducimus
								tempora.
							</p>
							<div className="flex flex-row justify-end gap-2 mb-2">
								<div className="p-4 badge hover:bg-primary">
									<FaComment size={30} className="p-1 mr-1" />
									{review.comment_count}
								</div>
								<div className="p-4 badge hover:bg-primary">
									<FaThumbsUp size={30} className="p-1 mr-1" />
									{review.votes}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/5 h-full border border-primary">
					comments section to come
				</div>
			</div>

			<Footer />
		</>
	);
};

export default GameReview;
