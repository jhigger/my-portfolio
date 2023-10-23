/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { FaDiscord, FaGithub } from "react-icons/fa";
import About from "~/components/About";
import Hero from "~/components/Hero";
import Works from "~/components/Works";

export default function Home() {
	return (
		<>
			<Head>
				<title>John Jhigger</title>
				<meta
					name="description"
					content="John Jhigger is a self-taught web developer who's passionate about creating awesome stuff on the web."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="prose-base relative dark:dark:bg-gray-950">
				<Sides />
				<div className="container mx-auto px-6 md:px-16 lg:px-28">
					<div className="relative z-40">
						<Hero />
						<About />
						<div className="custom-divider" />
						<Works />
					</div>
				</div>
			</main>
		</>
	);
}

const Sides = () => {
	return (
		<div className="container fixed bottom-0 left-0 right-0 z-10 mx-auto hidden justify-between px-8 lg:flex">
			<div className="w-10 flex-col items-center justify-end after:mx-auto after:h-48 after:w-px after:bg-gray-500 lg:flex">
				<ul className="flex flex-col gap-2 p-0 text-2xl last:mb-6 [&>*:hover]:-translate-y-1 [&>*:hover]:text-black dark:[&>*:hover]:text-white [&>*]:m-0 [&>*]:p-2 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
					<li>
						<a
							href="https://github.com/jhigger"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href="https://discord.com/users/284489990598295552"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaDiscord />
						</a>
					</li>
				</ul>
			</div>
			<div className="w-10 flex-col items-center justify-end after:mx-auto after:h-24 after:w-px after:bg-gray-500 lg:flex">
				<div className="flex flex-col last:mb-6 [&>*:hover]:-translate-y-1 [&>*:hover]:text-black dark:[&>*:hover]:text-white [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
					<a
						className="m-0 p-2 text-xs tracking-widest [writing-mode:vertical-lr]"
						href="mailto: njohnjhigger@gmail.com"
					>
						njohnjhigger@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
};
