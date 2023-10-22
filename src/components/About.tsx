/* eslint-disable @next/next/no-img-element */
import Balancer from "react-wrap-balancer";

const About = () => {
	return (
		<div className="prose-base mx-auto flex flex-col py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 lg:w-3/4">
			<div id="about-portal"></div>
			<h2 className="title-line-end flex w-2/3 gap-6 self-end whitespace-nowrap">
				About Me
			</h2>
			<div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-gray-500/5 p-8 xl:flex-row xl:gap-24">
				<div className="relative w-full max-w-xs">
					<img
						className="absolute -bottom-10 left-4 z-10 [clip-path:polygon(15%_0,100%_0,100%_85%,85%_99%,0_100%,0_15%)]"
						src="https://avatars.githubusercontent.com/u/30231759"
						alt="kairos"
					/>
					<div className="aspect-square bg-gray-400 [clip-path:polygon(15%_0,100%_0,100%_85%,85%_99%,0_100%,0_15%)]"></div>
				</div>
				<p className="w-full self-start">
					<Balancer>
						👋 Hello there! I go by the name Kairos online, although
						my real name is Jhigger. I am a front-end developer with
						a passion for learning and improving every day. In my
						free time, I enjoy watching anime and movies, as well as
						occasionally playing games with my friends.
					</Balancer>
				</p>
				<ul>
					<li>interests</li>
					<li>skills</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
