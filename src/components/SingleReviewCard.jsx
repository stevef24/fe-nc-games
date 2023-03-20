import React from "react";
import { NavLink } from "react-router-dom";
import { FaComment, FaShare, FaHeart } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const SingleReviewCard = ({ review }) => {
	const { title, category, review_img_url, designer, review_id } = review;

	return (
		<Tilt>
			<div className="my-4 border rounded-lg border-stone-800 h-96 w-72 hover:border-primary ">
				<figure className="h-1/2">
					<img
						src={review_img_url}
						alt={title}
						className="h-full rounded-lg "
					/>
				</figure>
				<div className="flex items-center justify-center h-20">
					<h1 className="p-1 text-lg font-bold text-center text-green-400">
						{title}
					</h1>
				</div>
				<div className="flex items-center justify-center h-10 gap-2 ">
					<div className="badge badge-outline border-stone-700">{`#${category}`}</div>
					<div className="badge badge-outline border-stone-700">{`#${designer}`}</div>
				</div>
				<div className="flex items-center justify-between h-16 gap-4 p-2 ">
					<div className="flex items-end justify-end gap-4 p-4">
						<div className="flex ">
							<FaComment
								size={20}
								className="text-stone-600 hover:text-primary"
							/>
						</div>
						<div>
							<FaShare
								size={20}
								className="text-stone-600 hover:text-primary"
							/>
						</div>
						<div>
							<FaHeart
								size={20}
								className="text-stone-600 hover:text-primary"
							/>
						</div>
					</div>
					<NavLink
						to={`/reviews/${review_id}`}
						className="w-1/3 mr-2 btn btn-primary"
					>
						Read
					</NavLink>
				</div>
			</div>
		</Tilt>
	);
};

export default SingleReviewCard;
