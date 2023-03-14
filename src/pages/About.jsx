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
						<p className="w-3/4 py-6 ">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
							ipsum similique a, in vel cupiditate? Aliquam labore provident
							amet distinctio fugit tempora earum autem, sapiente id laudantium
							necessitatibus eum, voluptates illo dolorem ex nihil blanditiis
							sunt fugiat adipisci nisi eaque. Quasi tempore aperiam velit odit
							sint doloribus similique minus laborum. et a id nisi.
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
