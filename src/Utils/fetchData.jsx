import axios from "axios";

const mainApi = axios.create({
	baseURL: "https://be-nc-games-leks.onrender.com/api",
});

export const fetchAllReviews = () => {
	return mainApi.get("/reviews").then(({ data: reviews }) => {
		return reviews;
	});
};
export const fetchReviewById = (reviewId) => {
	return mainApi.get(`/reviews/${reviewId}`).then(({ data: { review } }) => {
		console.log(review);
		return review;
	});
};
