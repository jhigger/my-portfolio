import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	const [theme, setTheme] = useState<string | null>(null);

	const handleToggle = () => {
		if (theme === "light") {
			setTheme(() => {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
				return "dark";
			});
		} else {
			setTheme(() => {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
				return "light";
			});
		}
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme") ?? "dark";
		document.documentElement.setAttribute("data-theme", localTheme);
		theme === "dark" && document.documentElement.classList.add("dark");
		setTheme(localTheme);
	}, [theme]);

	if (!theme) {
		return; // `theme` is null in the first render
	}

	return (
		<div className={`${theme}`}>
			<Navbar theme={theme} handleToggle={handleToggle} />
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
