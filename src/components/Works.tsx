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

			<section>
				<h3 className="flex items-baseline justify-end gap-4">
					<span className="diagonals"></span>
					Featured Projects
				</h3>
				<ul className="flex flex-col gap-16 [&>li:nth-child(even)>div:nth-of-type(1)]:col-start-6 [&>li:nth-child(even)>div:nth-of-type(2)>p]:text-start [&>li:nth-child(even)>div:nth-of-type(2)]:col-start-1 [&>li:nth-child(even)>div:nth-of-type(2)]:col-end-8 [&>li:nth-child(even)>div:nth-of-type(2)]:items-start">
					{Array(3)
						.fill(null)
						.map((_, i) => {
							return (
								<li
									key={i}
									className="grid w-full grid-cols-1 items-center xl:grid-cols-12"
								>
									<div className="col-span-7 col-start-1 row-span-full aspect-video rounded-lg bg-white ring ring-gray-500/5"></div>
									<div className="col-span-7 col-start-6 row-span-full flex h-full flex-col items-end justify-center gap-4">
										<h4>title</h4>
										<p className="w-full rounded-lg bg-gray-100 p-4 text-end shadow-lg dark:bg-gray-900">
											description
										</p>
										<div>links</div>
									</div>
								</li>
							);
						})}
				</ul>
			</section>

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
		</section>
	);
};

export default Works;
