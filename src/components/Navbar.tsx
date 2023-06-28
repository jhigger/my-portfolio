import Link from "next/link";

const Navbar = () => {
	return (
		<header className="navbar fixed top-0 z-40 w-full border-b border-base-100 bg-opacity-60 shadow-lg backdrop-blur-sm">
			<div className="container mx-auto px-4">
				<div className="flex-1">
					<Link className="text-xl text-gray-50" href="/">
						Jhigger
					</Link>
				</div>
				<nav className="flex-none">
					<ul className="menu menu-horizontal gap-2 px-1">
						<li>
							<a>Link</a>
						</li>
						<li>
							<a>Link 1</a>
						</li>
						<li>
							<a>Link 2</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
