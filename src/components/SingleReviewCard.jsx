import React from "react";
import { NavLink } from "react-router-dom";
import { FaComment, FaShare } from "react-icons/fa";

const SingleReviewCard = ({ review }) => {
	const {
		title,
		category,
		review_img_url,
		votes,
		designer,
		comment_count,
		review_id,
	} = review;

	return (
		<div className="mb-4 shadow-xl hover:border card lg:card-side bg-base-100 lg:h-60 hover:border-primary">
			<figure className="h-full">
				<img
					src={review_img_url}
					alt="review"
					className="lg:h-full lg:w-60 object-fit"
				/>
			</figure>
			<div className="justify-around card-body">
				<h2 className="mb-1 h-1/3 card-title">{title}</h2>
				<p className="font-normal text text-primary">
					{designer}
					<span className="ml-4 badge badge-outline badge-accent">
						{category}
					</span>
				</p>
				<div className="flex flex-col card-actions">
					<div className="flex flex-row items-center justify-center gap-2 mb-2">
						<div className="cursor-pointer badge hover:bg-accent">
							<FaComment size={20} className="p-1 mr-1" />
							{comment_count}
						</div>
						<div className="cursor-pointer badge hover:bg-accent">
							<FaShare className="mr-2" /> share
						</div>
					</div>
					<div className="justify-end card-actions">
						<NavLink to={`/reviews/${review_id}`} className="btn btn-outline ">
							READ MORE
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleReviewCard;
