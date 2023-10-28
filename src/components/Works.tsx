/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import FlipMove from "react-flip-move";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { featuredProjects, otherProjects } from "~/projects";

const FeaturedProjects = () => {
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
							className="grid w-full grid-cols-1 items-center lg:grid-cols-12"
						>
							<div className="col-span-7 col-start-1 row-span-full hidden aspect-video overflow-clip rounded-lg bg-gray-500/5 ring ring-gray-500/5 lg:block">
								<div className="group relative flex h-full w-full items-center justify-center">
									<a
										className="absolute z-10 h-full w-full bg-opacity-60 transition-all hover:bg-gray-950/50 hover:backdrop-blur-sm focus:bg-gray-950/50 focus:backdrop-blur-sm"
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Preview webpage"
									></a>
									<img
										className="absolute transition-all ease-in-out group-hover:scale-110"
										src={project.image}
										alt="Preview Image"
									/>
								</div>
							</div>
							<div className="col-span-7 row-span-full flex h-full flex-col justify-center gap-4 lg:col-start-6 lg:items-end">
								<h4>{project.title}</h4>
								<p className="relative z-10 w-full rounded-lg bg-gray-100 p-4 shadow-lg md:prose-xl dark:bg-gray-900 lg:text-end">
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

const OtherProjects = () => {
	const initialProjectsShowed = 5;
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow((prev) => !prev);
	};

	return (
		<section>
			<h3 className="row-span-full flex items-baseline justify-end gap-4">
				<span className="diagonals"></span>
				Other Projects
			</h3>
			<FlipMove
				className="prose-base grid w-full items-center gap-4 p-0 md:grid-cols-2 xl:grid-cols-3"
				typeName="ul"
				staggerDelayBy={100}
				enterAnimation="fade"
				leaveAnimation="none"
			>
				{[...otherProjects].reverse().map((project, i) => {
					const itemsToShow = show
						? otherProjects.length
						: initialProjectsShowed;
					if (i > itemsToShow) return;

					return (
						<li key={project.title} className="group h-full">
							<div className="relative flex h-full flex-col overflow-clip rounded-lg bg-gray-500/5 p-8 shadow">
								<div className="folder-effect"></div>
								<h4 className="custom-underline !mt-0 border-b-[1px] border-transparent pr-2">
									<a
										title="Preview"
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h4>
								<p>{project.description}</p>
								<div className="flex h-full items-end gap-4">
									<a
										title="Source code"
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiGithub />
									</a>
									{project.preview && (
										<a
											title="Preview"
											href={project.preview}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FiExternalLink />
										</a>
									)}
								</div>
							</div>
						</li>
					);
				})}
			</FlipMove>
			<div className="flex w-full items-center justify-center">
				<button
					className="cut-corners"
					onClick={toggleShow}
					aria-label={`Show ${show ? "Less" : "More"}`}
				>
					Show {show ? "Less" : "More"}
				</button>
			</div>
		</section>
	);
};

const Works = () => {
	return (
		<section className="prose-base mx-auto flex flex-col gap-24 py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 xl:w-3/4">
			<h2 className="title-line-start group !mb-0">
				Some Of My Works
				<span className="sm:after:content-['📁'] sm:group-hover:after:content-['📂']"></span>
			</h2>

			<FeaturedProjects />
			<OtherProjects />
		</section>
	);
};

export default Works;
