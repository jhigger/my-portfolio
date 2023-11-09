import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

enum ThemeType {
	Dark = "dark",
	Light = "light",
}

const MyApp: AppType = ({ Component, pageProps }) => {
	const [theme, setTheme] = useState<ThemeType | null>(null);

	const handleToggle = () => {
		if (theme === ThemeType.Light) {
			setTheme(() => {
				document.documentElement.classList.add(ThemeType.Dark);
				localStorage.setItem("theme", ThemeType.Dark);
				return ThemeType.Dark;
			});
		} else {
			setTheme(() => {
				document.documentElement.classList.remove(ThemeType.Dark);
				localStorage.setItem("theme", ThemeType.Light);
				return ThemeType.Light;
			});
		}
	};

	useEffect(() => {
		const localTheme =
			(localStorage.getItem("theme") as ThemeType) ?? ThemeType.Dark;
		document.documentElement.setAttribute("data-theme", localTheme);
		theme === ThemeType.Dark &&
			document.documentElement.classList.add(ThemeType.Dark);
		setTheme(localTheme);
	}, [theme]);

	if (!theme) {
		return; // `theme` is null in the first render
	}

	return (
		<div className={`${theme}`}>
			<Navbar {...{ theme, handleToggle }} />
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
