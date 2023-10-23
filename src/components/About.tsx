/* eslint-disable @next/next/no-img-element */
import Balancer from "react-wrap-balancer";

type SkillType = { name: string; color: string };

const About = () => {
	const skills: SkillType[] = [
		{ name: "HTML5", color: "border-[#DC4D25]" },
		{ name: "CSS3", color: "border-[#254BDD]" },
		{ name: "JavaScript", color: "border-[#EFD81D]" },
		{ name: "ReactJS", color: "border-[#149ECA]" },
		{ name: "NodeJS", color: "border-[#74B35A]" },
		{ name: "TypeScript", color: "border-[#2F74C0]" },
		{ name: "NextJS", color: "border-[#000000]" },
		{ name: "TailwindCSS", color: "border-[#07B0CE]" },
		{ name: "SQL", color: "border-[#4474CA]" },
	];

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
						my real name is Jhigger. I am a web developer focused on
						front-end with a passion for learning and improving
						every day. In my free time, I enjoy watching anime and
						movies, as well as occasionally playing games with my
						friends.
					</Balancer>
				</p>
				{/* <ul>
					<li>interests</li>
					<li>skills</li>
				</ul> */}
			</div>
			<div className="flex items-stretch gap-4">
				<div className="custom-divider-vertical m-0 ml-8 h-8 md:h-16"></div>
				<div>
					<h3>My Tools 🛠️</h3>
					<ul className="flex flex-wrap items-center gap-4">
						{skills.map((skill, i) => {
							return (
								<li
									key={i}
									className={`badge ${skill.color} dark:text-white`}
								>
									{skill.name}
								</li>
							);
						})}
						<li className="badge dark:text-white">...more soon</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
