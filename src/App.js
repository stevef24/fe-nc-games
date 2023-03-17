import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import GameReview from "./pages/GameReview";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/reviews/:review_id" element={<GameReview />} />
				<Route path="/home/:category" element={<CategoriesPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
