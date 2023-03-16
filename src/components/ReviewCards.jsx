import React, { useEffect, useState } from "react";
import SingleReviewCards from "./SingleReviewCard";
import Spinner from "./Spinner";
import { fetchAllReviews } from "../Utils/fetchData";
import { useParams } from "react-router";
const ReviewCards = () => {
	const params = useParams();
	const [reviews, setReviews] = useState([]);
	const [isLoading, SetLoading] = useState(true);

	useEffect(() => {
		SetLoading(true);
		fetchAllReviews().then((data) => {
			setReviews(data.reviews);
			SetLoading(false);
		});
	}, []);

	const reviewList = reviews.map((review) => {
		return <SingleReviewCards key={review.review_id} review={review} />;
	});
	return (
		<>
			{isLoading ? (
				<Spinner isLoading={isLoading} />
			) : (
				<div className="grid w-9/12 min-h-screen grid-cols-1 gap-4 p-8 mx-auto lg:grid-cols-2 md:grid-cols-1">
					{reviewList}
				</div>
			)}
		</>
	);
};

export default ReviewCards;
