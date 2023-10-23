const Works = () => {
	return (
		<section className="prose-base mx-auto flex flex-col py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 lg:w-3/4">
			<h2 className="title-line-start flex w-2/3 gap-6 self-start whitespace-nowrap">
				Some of my works
			</h2>
			<div className="group flex w-full flex-col items-center gap-4 rounded-2xl bg-gray-500/5 p-8 xl:flex-row xl:gap-24">
				<div className="text-9xl after:content-['📁'] group-hover:after:content-['📂']"></div>
				<ul className="flex w-full list-disc flex-col items-center lg:block lg:columns-2">
					<li className="!m-0">project1</li>
					<li className="">project2</li>
					<li className="">project3</li>
					<li className="">project4</li>
				</ul>
			</div>
		</section>
	);
};

export default Works;
