import React, { useEffect, useState } from "react";
import SingleReviewCards from "./SingleReviewCard";
import Spinner from "./Spinner";
import { fetchAllReviews } from "../Utils/fetchData";
import SearchCategory from "../components/SearchCategory";
import { useParams } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReviewCards = () => {
	const { category } = useParams();
	const [reviews, setReviews] = useState([]);
	const [isLoading, SetLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams("Votes=asc");
	const navigate = useNavigate();
	useEffect(() => {
		SetLoading(true);
		fetchAllReviews(category, searchParams)
			.then((data) => {
				setReviews(data.reviews);
				SetLoading(false);
			})
			.catch((err) => {
				navigate("/home");
				if (err.response.status === 404 || err.response.status === 400) {
					toast.error("sorry! Category does not exist redirected to home!");
				}
			});
	}, [category, searchParams]);

	const reviewList = reviews.map((review) => {
		return <SingleReviewCards key={review.review_id} review={review} />;
	});
	return (
		<>
			<SearchCategory setSearchParams={setSearchParams} />
			{isLoading ? (
				<Spinner isLoading={isLoading} />
			) : (
				<div className="grid w-10/12 min-h-full grid-cols-1 gap-4 mx-auto mt-4 xl:grid-cols-4 place-items-start lg:grid-cols-3 md:grid-cols-2 sm:place-items-center">
					{reviewList}
				</div>
			)}
		</>
	);
};

export default ReviewCards;
