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
			image: "images/pizza_stack.jpg",
			title: "Pizza Stack",
			description:
				"Designed an attractive and user-friendly interface using ReactJS and Chakra UI, added animations using Framer Motion, integrated a reservation form for franchising using Formik, and optimized the website for mobile devices.",
			preview: "https://jhigger-pizzastack.netlify.app/",
			github: "https://github.com/jhigger/pizzastack2",
		},
		{
			image: "images/duckett_architecture.jpg",
			title: "Duckett Architecture",
			description:
				"Developed a landing page for an architectural firm based in New Zealand to showcase their projects. I utilized NextJS, ReactJS and TailwindCSS to easily design and make it SEO friendly.",
			preview: "https://www.duckettarchitecture.co.nz/",
			github: "https://github.com/jhigger/duckett-archi",
		},
		{
			image: "images/qtopia.jpg",
			title: "Qtopia",
			description: "Created a landing page for an NFT project.",
			preview: "https://www.qtopia.io/",
			github: "https://github.com/jhigger/qtopia",
		},
	];

	return (
		<section>
			<h3 className="!mt-0 flex items-baseline justify-end gap-4">
				<span className="diagonals"></span>
				Featured Projects
			</h3>
			<ul className="flex flex-col gap-12 p-0 xl:gap-24 [&>li:nth-child(even)>div:nth-of-type(1)]:col-start-6 [&>li:nth-child(even)>div:nth-of-type(2)>p]:text-start [&>li:nth-child(even)>div:nth-of-type(2)]:col-start-1 [&>li:nth-child(even)>div:nth-of-type(2)]:col-end-8 [&>li:nth-child(even)>div:nth-of-type(2)]:items-start">
				{featuredProjects.map((project, i) => {
					return (
						<li
							key={i}
							className="grid w-full grid-cols-1 items-center xl:grid-cols-12"
						>
							<div className="col-span-7 col-start-1 row-span-full aspect-video overflow-clip rounded-lg bg-gray-500/5 ring ring-gray-500/5 hover:ring-gray-500/50">
								<div className="relative flex h-full w-full items-center justify-center">
									<a
										className="absolute z-10 h-full w-full transition-all hover:bg-gray-950/50 focus:bg-gray-950/50"
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
							<div className="col-span-7 col-start-6 row-span-full flex h-full flex-col items-end justify-center gap-4">
								<h4>{project.title}</h4>
								<p className="z-10 w-full rounded-lg bg-gray-100 p-4 text-end shadow-lg md:prose-xl dark:bg-gray-900">
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

type OtherProjectType = Omit<FeaturedProjectType, "image">;

const OtherProjects = () => {
	const projects: OtherProjectType[] = Array(10)
		.fill(null)
		.map((_, i) => {
			if (i % 2) {
				return {
					title: "title title title",
					description:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, minima.",
					preview: "",
					github: "",
				};
			} else {
				return {
					title: "title title title",
					description: "Lorem ipsum, dolor sit amet.",
					preview: "",
					github: "",
				};
			}
		});

	return (
		<section>
			<h3 className="row-span-full flex items-baseline justify-end gap-4">
				<span className="diagonals"></span>
				Other Projects
			</h3>
			<ul className="prose-base grid w-full items-center gap-4 p-0 md:grid-cols-2 xl:grid-cols-3">
				{projects.map((project) => {
					return (
						<li key={project.title} className="group h-full">
							<div className="relative flex h-full flex-col overflow-clip rounded-lg bg-gray-500/5 p-8 shadow">
								<div className="folder-effect"></div>
								<h4 className="custom-underline !mt-0 border-b-[1px] border-transparent pr-2">
									{project.title}
								</h4>
								<p>{project.description}</p>
								<div className="flex h-full items-end gap-4">
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

const Works = () => {
	return (
		<section className="prose-base mx-auto flex flex-col gap-24 py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 lg:w-3/4">
			<h2 className="title-line-start group !mb-0">
				Some Of My Works
				<span className="after:content-['📁'] group-hover:after:content-['📂']"></span>
			</h2>

			<FeaturedProjects />
			<OtherProjects />
		</section>
	);
};

export default Works;
