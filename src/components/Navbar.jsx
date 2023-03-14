import React from "react";
import { NavLink } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";

const Navbar = () => {
	const classes = "btn btn-ghost btn-sm";

	return (
		<nav className="mb-12 shadow-lg navbar">
			<div className="container mx-auto">
				<div className="flex-none px-2 mx-2">
					<FaGamepad className="inline pr-2 text-3xl" />
					<NavLink to="/" className="text-lg font-bold align-middle">
						NC-games
					</NavLink>
				</div>
				<div className="flex-1 px-2 mx-2">
					<div className="flex justify-end">
						<NavLink
							to="/home"
							className={({ isActive }) =>
								isActive ? `${classes} btn-active` : `${classes}`
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? `${classes} btn-active` : `${classes}`
							}
						>
							About
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
