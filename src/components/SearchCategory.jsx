import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SearchCategory = () => {
	return (
		<div className="container flex flex-col items-center justify-center w-full mx-auto md:flex-col">
			<div className="flex flex-row justify-center w-2/3">
				<input
					type="text"
					placeholder="search"
					className="w-full max-w-xs gap-4 input input-bordered"
				/>
				<button className="ml-2 f btn btn-primary">
					<FaSearch className="inline mr-2" />
					Search
				</button>
			</div>
			<div>
				<div className="mt-4 tabs tabs-boxed">
					<NavLink className="tab">Category</NavLink>
					<NavLink className="tab tab-active">Date</NavLink>
					<NavLink className="tab">Name</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SearchCategory;
