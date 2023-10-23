import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

type NavbarProps = { theme: string; handleToggle: () => void };

const Navbar = ({ theme, handleToggle }: NavbarProps) => {
	return (
		<header className="navbar fixed top-0 z-50 w-full border-b border-base-100 bg-opacity-60 shadow-lg backdrop-blur-sm">
			<nav className="container mx-auto px-4">
				<div className="flex-1">
					<Link className="text-xl dark:text-gray-50" href="/">
						Kairos
					</Link>
				</div>
				<button
					className="btn btn-circle btn-ghost btn-sm"
					onClick={handleToggle}
				>
					{theme === "dark" ? <FaMoon /> : <FaSun />}
				</button>
			</nav>
		</header>
	);
};

export default Navbar;
