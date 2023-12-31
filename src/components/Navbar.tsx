import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

type NavbarProps = { theme: string; handleToggle: () => void };

const Navbar = ({ theme, handleToggle }: NavbarProps) => {
	return (
		<header className="navbar fixed top-0 z-50 w-full border-b border-base-100 bg-opacity-60 shadow-lg backdrop-blur-sm">
			<nav className="container mx-auto flex gap-2 px-4">
				<div className="relative flex-1">
					<Link
						className="btn btn-circle btn-ghost btn-sm font-mono text-2xl dark:text-gray-50"
						href="/"
					>
						J
					</Link>
					<div className="absolute top-[47.5px] w-8 border-b border-gray-500"></div>
				</div>
				<div className="relative flex items-center justify-center">
					<a
						className="btn btn-ghost btn-sm flex items-center justify-center gap-2"
						href="/Resume2023.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
					<div className="absolute top-[47.5px] w-8 border-b border-gray-500"></div>
				</div>
				<div className="relative">
					<button
						className="btn btn-circle btn-ghost btn-sm relative"
						aria-label="Toggle dark theme"
						onClick={handleToggle}
					>
						{theme === "dark" ? <FaMoon /> : <FaSun />}
					</button>
					<div className="absolute top-[47.5px] w-8 border-b border-gray-500"></div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
