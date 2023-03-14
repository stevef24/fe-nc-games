import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-4/6 h-full mx-auto mt-12 text-center">
				<h1 className="mb-12 font-bold text-7xl text-primary">NC-Games</h1>
				<p className="mb-12 text-3xl font-bold">
					Level up your gaming experience with our comprehensive reviews and
					insightful analysis. From the latest AAA titles to indie gems, our
					website has everything you need to make informed decisions before
					hitting that 'play' button.
				</p>
				<h1 className="h-12 mb-12 text-5xl italic font-bold text-primary">
					<Typewriter
						words={["Review", "Connect", "Share", "Game"]}
						loop={false}
						cursor={true}
					/>
				</h1>
				<NavLink
					to="/home"
					className="items-center mx-auto btn btn-lg btn-primary"
				>
					<FaHome className="mr-2" />
					Visit our website
				</NavLink>
			</div>
		</>
	);
};

export default LandingPage;
