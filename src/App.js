import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import GameReview from "./pages/GameReview";
import CategoriesPage from "./pages/CategoriesPage";
import { UserProvider } from "./Utils/Context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<UserProvider>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/reviews/:review_id" element={<GameReview />} />
					<Route path="/home/:category" element={<CategoriesPage />} />
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</UserProvider>
		</>
	);
}

export default App;
