import { FaDiscord, FaEnvelope, FaExternalLinkSquareAlt } from "react-icons/fa";

const Contact = () => {
	return (
		<section className="prose-base mx-auto flex flex-col items-center justify-center gap-12 py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 xl:w-3/4">
			<h2>Contact Me</h2>
			<ul className="flex gap-2 !p-0 text-2xl last:mb-6 [&>*:hover]:-translate-y-1 [&>*:hover]:text-black dark:[&>*:hover]:text-white [&>*]:m-0 [&>*]:p-2 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
				<li>
					<a
						href="https://discord.com/users/284489990598295552"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Go to discord profile"
						title="Discord profile"
					>
						<FaDiscord />
					</a>
				</li>
				<li>
					<a href="mailto:njohnjhigger@gmail.com" title="Email">
						<FaEnvelope />
					</a>
				</li>
			</ul>

			<a
				className="cut-corners flex items-center justify-center gap-2"
				href="/Resume2023.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				Resume <FaExternalLinkSquareAlt />
			</a>
		</section>
	);
};

export default Contact;
