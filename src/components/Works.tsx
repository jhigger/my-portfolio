/* eslint-disable @next/next/no-img-element */
import { FiExternalLink, FiGithub } from "react-icons/fi";

type FeaturedProjectType = {
	image: string;
	title: string;
	description: string;
	preview: string;
	github: string;
};

const FeaturedProjects = () => {
	const featuredProjects: FeaturedProjectType[] = [
		{
			image: "images/pizza_stack.png",
			title: "Pizza Stack",
			description:
				"Designed an attractive and user-friendly interface using ReactJS and Chakra UI, added animations using Framer Motion, integrated a reservation form for franchising using Formik, and optimized the website for mobile devices.",
			preview: "https://jhigger-pizzastack.netlify.app/",
			github: "https://github.com/jhigger/pizzastack2",
		},
		{
			image: "images/duckett_architecture.png",
			title: "Duckett Architecture",
			description:
				"Developed a landing page for an architectural firm based in New Zealand to showcase their projects. I utilized NextJS, ReactJS and TailwindCSS to easily design and make it SEO friendly.",
			preview: "https://www.duckettarchitecture.co.nz/",
			github: "https://github.com/jhigger/duckett-archi",
		},
		{
			image: "images/qtopia.png",
			title: "Qtopia",
			description: "Created a landing page for an NFT project.",
			preview: "https://www.qtopia.io/",
			github: "https://github.com/jhigger/qtopia",
		},
	];

	return (
		<section>
			<h3 className="flex items-baseline justify-end gap-4">
				<span className="diagonals"></span>
				Featured Projects
			</h3>
			<ul className="flex flex-col gap-16 [&>li:nth-child(even)>div:nth-of-type(1)]:col-start-6 [&>li:nth-child(even)>div:nth-of-type(2)>p]:text-start [&>li:nth-child(even)>div:nth-of-type(2)]:col-start-1 [&>li:nth-child(even)>div:nth-of-type(2)]:col-end-8 [&>li:nth-child(even)>div:nth-of-type(2)]:items-start">
				{featuredProjects.map((project, i) => {
					return (
						<li
							key={i}
							className="grid w-full grid-cols-1 items-center xl:grid-cols-12"
						>
							<div className="col-span-7 col-start-1 row-span-full aspect-video overflow-clip rounded-lg bg-gray-500/5 ring ring-gray-500/5">
								<div className="relative flex h-full w-full items-center justify-center">
									<a
										className="absolute z-10 h-full w-full hover:bg-gray-950/50"
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
									></a>
									<img
										className="absolute"
										src={project.image}
										alt="Preview Image"
									/>
								</div>
							</div>
							<div className="z-10 col-span-7 col-start-6 row-span-full flex h-full flex-col items-end justify-center gap-4">
								<h4>{project.title}</h4>
								<p className="w-full rounded-lg bg-gray-100 p-4 text-end shadow-lg dark:bg-gray-900">
									{project.description}
								</p>
								<div className="flex gap-4">
									<a
										title="GitHub Link"
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiGithub />
									</a>
									<a
										title="Preview Link"
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiExternalLink />
									</a>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

type OtherProjectType = { name: string };

const OtherProjects = () => {
	const projects: OtherProjectType[] = [
		{
			name: "project1",
		},
		{
			name: "project2",
		},
		{
			name: "project3",
		},
		{
			name: "project4",
		},
	];

	return (
		<section>
			<h3 className="row-span-full flex items-baseline justify-end gap-4">
				<span className="diagonals"></span>
				Other Projects
			</h3>
			<div className="group flex w-full flex-col items-center gap-4 rounded-2xl bg-gray-500/5 p-8 xl:flex-row xl:gap-24">
				<div className="text-9xl after:content-['📁'] group-hover:after:content-['📂']"></div>

				<ul className="flex w-full list-disc flex-col items-center lg:block lg:columns-2 [&>li]:w-fit [&>li]:pr-2">
					{projects.map((project) => {
						return (
							<li
								key={project.name}
								className="hover:custom-underline list-[square] border-b-[1px] border-transparent first-of-type:m-0 hover:list-['👉']"
							>
								{project.name}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

const Works = () => {
	return (
		<section className="prose-base mx-auto flex flex-col py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 lg:w-3/4">
			<h2 className="title-line-start flex w-2/3 gap-6 self-start whitespace-nowrap">
				Some Of My Works ⚙️
			</h2>

			<FeaturedProjects />
			<OtherProjects />
		</section>
	);
};

export default Works;
