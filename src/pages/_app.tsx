import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	const [theme, setTheme] = useState<string | null>(null);

	const handleToggle = () => {
		theme === "light"
			? setTheme(() => {
					localStorage.setItem("theme", "dark");
					return "dark";
			  })
			: setTheme(() => {
					localStorage.setItem("theme", "light");
					return "light";
			  });
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme") ?? "dark";
		document.querySelector("html")?.setAttribute("data-theme", localTheme);
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
