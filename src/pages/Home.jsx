import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewCards from "../components/ReviewCards";
import SearchCategory from "../components/SearchCategory";

const Home = () => {
	return (
		<>
			<Navbar />
			<SearchCategory />
			<ReviewCards />
			<Footer />
		</>
	);
};

export default Home;
