type ProjectType = { name: string };

const Works = () => {
	const projects: ProjectType[] = [
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
		<section className="prose-base mx-auto flex flex-col py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 lg:w-3/4">
			<h2 className="title-line-start flex w-2/3 gap-6 self-start whitespace-nowrap">
				Some Of My Works ⚙️
			</h2>
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

export default Works;
