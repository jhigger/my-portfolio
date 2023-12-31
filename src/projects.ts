type FeaturedProjectType = {
	image: string;
	title: string;
	description: string;
	preview: string;
	github: string;
};

export const featuredProjects: FeaturedProjectType[] = [
	{
		image: "images/pizza_stack.jpg",
		title: "Pizza Stack",
		description:
			"Designed an attractive and user-friendly interface using ReactJS and Chakra UI, added animations using Framer Motion, integrated a reservation form for franchising using Formik, and made it responsive for mobile devices.",
		preview: "https://jhigger-pizzastack.netlify.app/",
		github: "https://github.com/jhigger/pizzastack2",
	},
	{
		image: "images/duckett_architecture.jpg",
		title: "Duckett Architecture",
		description:
			"Developed a landing page for an architectural firm based in New Zealand to showcase their projects. I utilized NextJS, TypeScript and TailwindCSS to easily design and make it SEO friendly.",
		preview: "https://www.duckettarchitecture.co.nz/",
		github: "https://github.com/jhigger/duckett-archi",
	},
	{
		image: "images/qtopia.jpg",
		title: "Qtopia",
		description: "Created a landing page for an NFT project.",
		preview: "https://kairos-qtopia.vercel.app/",
		github: "https://github.com/jhigger/qtopia",
	},
];

type OtherProjectType = Omit<FeaturedProjectType, "image" | "preview"> & {
	preview?: string;
};

export const otherProjects: OtherProjectType[] = [
	{
		title: "Master Of Gingerbread",
		description:
			"Website template for a bakery made with vanilla JS, HTML and Materialize CSS.",
		github: "https://github.com/jhigger/MasterOfGingerbread",
		preview: "https://masterofgingerbread.netlify.app/",
	},
	{
		title: "Materialize",
		description:
			"Landing page template made with Materialize CSS framework by Google.",
		github: "https://github.com/jhigger/Materialize",
		preview: "https://jhigger-materialize.netlify.app/",
	},
	{
		title: "Progressive Weather App",
		description:
			"A basic front end for querying data from the OpenWeatherMap API.",
		github: "https://github.com/jhigger/PWA-Weather-App",
		preview: "https://jhigger-weather-app.netlify.app/",
	},
	{
		title: "Expense Tracker",
		description:
			"A note-taking app that calculates expenses in real-time using Firebase.",
		github: "https://github.com/jhigger/expense-tracker",
		preview: "https://expense-tracker-jhigger.vercel.app/",
	},
	{
		title: "ArtisseAI",
		description: "A simple page for a mobile application.",
		github: "https://github.com/jhigger/artisse",
		preview: "https://kairos-artisse.vercel.app/",
	},
	{
		title: "Foxbyte",
		description: "Landing page for an NFT project.",
		github: "https://github.com/jhigger/foxbyte",
		preview: "https://kairos-foxbyte.vercel.app/",
	},
	{
		title: "Point Of Sale System",
		description:
			"Made using React, MaterialUI, Formik, Node, ExpressJS and Sequelize ORM with MVC design pattern in mind.",
		github: "https://github.com/jhigger/POS",
	},
	{
		title: "UA Stats Page",
		description: "Statistics page for Utility APE",
		github: "https://github.com/jhigger/ua-stats",
		preview: "https://kairos-ua-stats-page.vercel.app/",
	},
	{
		title: "UA Raid Page",
		description:
			"A page for users to apply for Utility APE tweet raiding program.",
		github: "https://github.com/jhigger/ua-pay-to-raid",
		preview: "https://kairos-ua-pay-to-raid.vercel.app/",
	},
	{
		title: "UA Client Dashboard",
		description:
			"A ticketing system for signing up to use Utility APE discord bot.",
		github: "https://github.com/jhigger/ua-client-dashboard",
		preview: "https://kairos-ua-dashboard-page.vercel.app/",
	},
	{
		title: "UA Holders Page",
		description: "A landing page for holders of Utility APE NFT",
		github: "https://github.com/jhigger/ua-holders-page",
		preview: "https://kairos-ua-holders-page.vercel.app/",
	},
	{
		title: "UA Client Page",
		description: "A landing page for clients of Utility APE discord bot.",
		github: "https://github.com/jhigger/ua-client-page",
		preview: "https://kairos-ua-client-page.vercel.app/",
	},
	{
		title: "Utility APE Home",
		description: "Home page of an NFT project.",
		github: "https://github.com/jhigger/ua-main-page",
		preview: "https://kairos-ua-main-page.vercel.app/",
	},
	{
		title: "My Portfolio",
		description: "This page",
		github: "https://github.com/jhigger/my-portfolio",
		preview: "/",
	},
	// {
	// 	title: "",
	// 	description: "",
	// 	github: "",
	// 	preview: "",
	// },
];
