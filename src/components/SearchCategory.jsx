import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SearchCategory = ({ setSearchParams }) => {
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
					<NavLink
						to="/home/strategy"
						className={({ isActive }) =>
							isActive ? "tab-active rounded-xl p-1 " : "tab"
						}
					>
						Strategy
					</NavLink>
					<NavLink
						to="/home/hidden-roles"
						className={({ isActive }) =>
							isActive ? "tab-active rounded-xl p-1 " : "tab"
						}
					>
						Hidden-roles
					</NavLink>
					<NavLink
						to="/home/dexterity"
						className={({ isActive }) =>
							isActive ? "tab-active rounded-xl p-1 " : "tab"
						}
					>
						Dexterity
					</NavLink>
				</div>
				<select
					className="w-full max-w-xs mt-4 select select-primary"
					onChange={(e) => {
						let selectedOption = e.target.value;
						setSearchParams(selectedOption);
					}}
				>
					<option disabled>Filter by</option>
					<option value="order=asc">Order (Asc)</option>
					<option value="order=desc">Order (Desc)</option>
					<option value="sort_by=votes">Votes</option>
					<option value="sort_by=designer">Designer</option>
				</select>
			</div>
		</div>
	);
};

export default SearchCategory;
