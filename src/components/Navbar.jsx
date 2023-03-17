import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";
import { UserContext } from "../Utils/Context/UserContext";

const Navbar = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
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
					<div className="flex items-center justify-end">
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
						<button
							className={
								isLoggedIn ? "btn btn-error py-1" : "btn btn-primary py-1"
							}
							onClick={() => setIsLoggedIn((prevState) => !prevState)}
						>
							{isLoggedIn ? "Log out" : "Log in"}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
