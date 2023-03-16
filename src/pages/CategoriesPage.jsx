import React from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const CategoriesPage = () => {
	const params = useParams();

	return (
		<>
			<Navbar />

			<Footer />
		</>
	);
};

export default CategoriesPage;
