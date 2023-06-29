import Head from "next/head";
import Hero from "~/components/Hero";
import { FaDiscord, FaGithub } from "react-icons/fa";

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
			<main className="prose-base relative bg-gray-950">
				<div className="container fixed bottom-0 left-0 right-0 mx-auto hidden justify-between px-8 lg:flex">
					<div className="w-10 flex-col items-center justify-end after:mx-auto after:h-24 after:w-px after:bg-gray-400 lg:flex">
						<ul className="flex flex-col gap-2 p-0 text-2xl last:mb-6 [&>*:hover]:-translate-y-1 [&>*]:m-0 [&>*]:p-2 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
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
					<div className="w-10 flex-col items-center justify-end after:mx-auto after:h-24 after:w-px after:bg-gray-400 lg:flex">
						<div className="flex flex-col last:mb-6 [&>*:hover]:-translate-y-1 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
							<a
								className="m-0 p-2 text-xs tracking-widest [writing-mode:vertical-lr]"
								href="mailto: njohnjhigger@gmail.com"
							>
								njohnjhigger@gmail.com
							</a>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-6 md:px-16 lg:px-28">
					<Hero />
				</div>
			</main>
		</>
	);
}
