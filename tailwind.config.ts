import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
		require("tailwind-scrollbar")({ nocompatible: true }),
	],
	daisyui: {
		themes: ["light", "dark"],
	},
	darkMode: "class",
} satisfies Config;
