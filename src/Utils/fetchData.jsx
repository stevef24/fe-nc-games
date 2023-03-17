import axios from "axios";

const mainApi = axios.create({
	baseURL: "https://be-nc-games-leks.onrender.com/api",
});

export const fetchAllReviews = (category, searchParams) => {
	const params = new URLSearchParams(searchParams);
	let url = "/reviews?";
	if (category) {
		url += `category=${category}&`;
	}
	return mainApi.get(`${url}${params}`).then(({ data: reviews }) => {
		return reviews;
	});
};
export const fetchReviewById = (reviewId) => {
	return mainApi.get(`/reviews/${reviewId}`).then(({ data: { review } }) => {
		return review;
	});
};

export const fetchComments = (reviewId) => {
	return mainApi
		.get(`/reviews/${reviewId}/comments`)
		.then(({ data: { comments } }) => {
			return comments;
		});
};
export const voteReview = (reviewId, num) => {
	return mainApi
		.patch(`/reviews/${reviewId}`, { inc_votes: num })
		.then((data) => data);
};
