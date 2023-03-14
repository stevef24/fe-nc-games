import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
	return (
		<>
			<Navbar />
			<div className="flex items-center justify-center h-full hero text-primary">
				<div className="text-center hero-content">
					<div className="max-w-lg">
						<h1 className="mb-8 font-bold text-8xl">oops!</h1>
						<p className="mb-8 text-5xl">404 page not found </p>
						<NavLink to="/" className="btn btn-outline btn-secondary">
							<FaHome className="mr-2" />
							Back to home
						</NavLink>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ErrorPage;
