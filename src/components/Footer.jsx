import { FaGithub } from "react-icons/fa";
const Footer = () => {
	const footerYear = new Date().getFullYear();
	return (
		<footer className="flex flex-col items-center justify-center h-32 p-5 bg-stone-900 footer">
			<div className="flex items-center justify-center gap-4 ">
				<a href="https://github.com/stevef24" target="_blank" rel="noreferrer">
					<FaGithub size={50} />
				</a>
				<p>Copyright &copy; Stav {footerYear}</p>
			</div>
		</footer>
	);
};

export default Footer;
