import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import GameReview from "./pages/GameReview";
import { LoadingProvider } from "./Utils/Context/LoadingContext";
import { UserProvider } from "./Utils/Context/UserContext";

function App() {
	return (
		<>
			<LoadingProvider>
				<UserProvider>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/reviews/:review_id" element={<GameReview />} />
						<Route path="/*" element={<ErrorPage />} />
					</Routes>
				</UserProvider>
			</LoadingProvider>
		</>
	);
}

export default App;
