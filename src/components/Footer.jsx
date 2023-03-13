import { FaGamepad } from "react-icons/fa";
const Footer = () => {
	const footerYear = new Date().getFullYear();
	return (
		<footer className="p-5 footer bg-neutral-900">
			<div>
				<FaGamepad size={50} />
				<p>
					Copyright &copy; Stav {footerYear} more items will be added shortly
				</p>
			</div>
		</footer>
	);
};

export default Footer;
