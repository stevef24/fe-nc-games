import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import picture from "../assets/gameconsole.jpeg";

const About = () => {
	return (
		<>
			<Navbar />
			<article className="flex w-5/6 h-full mx-auto ">
				<main className="flex-col mx-auto hero-content lg:flex-row-reverse">
					<img
						src={picture}
						className="max-w-sm rounded-lg shadow-2xl"
						alt="games console"
					/>
					<section>
						<h1 className="text-6xl font-bold ">About us</h1>
						<p className="w-5/6 py-6 ">
							Welcome to our online platform dedicated to providing game reviews
							and facilitating user discussions. Our team of experienced
							reviewers is committed to bringing you the latest insights and
							critiques on the most popular games on the market. From triple-A
							titles to indie gems, we cover it all. But we don't stop there. We
							believe that gaming is an interactive experience, and that's why
							we've created a community-driven forum where users can discuss
							their favorite games, share their opinions, and connect with other
							gamers from around the world. Our forum is a safe and inclusive
							space for gamers of all ages, genders, and backgrounds to come
							together and discuss their passion for gaming. At our core, we are
							gamers just like you. We understand the importance of a reliable
							review and the value of connecting with other gamers who share our
							interests.
						</p>
						<NavLink to="/home" className="btn btn-primary">
							Search reviews
						</NavLink>
					</section>
				</main>
			</article>
			<Footer />
		</>
	);
};

export default About;
