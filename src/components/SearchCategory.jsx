import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
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
					<NavLink to="/home/strategy" className="tab">
						Strategy
					</NavLink>
					<NavLink to="/home/hidden-roles" className="tab tab-active">
						Hidden-roles
					</NavLink>
					<NavLink to="/home/dexterity" className="tab">
						Dexterity
					</NavLink>
				</div>
				<select className="w-full max-w-xs mt-4 select select-primary">
					<option disabled selected>
						Filter by
					</option>
					<option>Date (Asc)</option>
					<option>Date (Desc)</option>
					<option>Votes</option>
					<option>Comment count</option>
				</select>
			</div>
		</div>
	);
};

export default SearchCategory;
