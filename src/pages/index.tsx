/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Hero from "~/components/Hero";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Balancer } from "react-wrap-balancer";

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
			<main className="prose-base relative z-10 bg-gray-950">
				<SideLines />
				<div className="container mx-auto px-6 md:px-16 lg:px-28">
					<Hero />
					<div className="prose-base mx-auto flex flex-col py-24 text-gray-300 md:prose-2xl prose-headings:font-bold lg:w-3/4">
						<h2 className="flex w-2/3 gap-6 self-end whitespace-nowrap before:my-auto before:h-px before:w-full before:bg-gray-500 after:my-auto  after:aspect-square after:w-4 after:bg-gray-500">
							About Me
						</h2>
						<div className="flex w-full items-center gap-12 rounded-2xl bg-gray-500/5 p-8">
							<div className="relative">
								<img
									className="absolute -bottom-10 left-4 z-10 [clip-path:polygon(15%_0,100%_0,100%_85%,85%_99%,0_100%,0_15%)]"
									src="https://avatars.githubusercontent.com/u/30231759"
									alt="kairos"
								/>
								<div className="aspect-square w-56 bg-gray-500 [clip-path:polygon(15%_0,100%_0,100%_85%,85%_99%,0_100%,0_15%)]"></div>
							</div>
							<p className="w-full self-start">
								<Balancer>
									Hello there! I go by the name Kairos online,
									although my real name is Jhigger. I am a
									front-end developer with a passion for
									learning and improving every day. In my free
									time, I enjoy watching anime and movies, as
									well as occasionally playing games with my
									friends.
								</Balancer>
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

const SideLines = () => {
	return (
		<div className="container fixed bottom-0 left-0 right-0 -z-10 mx-auto hidden justify-between px-8 lg:flex">
			<div className="w-10 flex-col items-center justify-end after:mx-auto after:h-48 after:w-px after:bg-gray-500 lg:flex">
				<ul className="flex flex-col gap-2 p-0 text-2xl last:mb-6 [&>*:hover]:-translate-y-1 [&>*:hover]:text-white [&>*]:m-0 [&>*]:p-2 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
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
				<div className="flex flex-col last:mb-6 [&>*:hover]:-translate-y-1 [&>*:hover]:text-white [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
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
