import { FaDiscord, FaEnvelope } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

const Contact = () => {
	return (
		<section className="prose-base mx-auto flex flex-col items-center justify-center py-24 md:prose-2xl prose-headings:font-bold dark:text-gray-300 xl:w-3/4">
			<h2>Contact Me</h2>
			<p className="text-center">
				<Balancer>
					Send me a message if you have opportunities for
					collaboration or want to build something amazing.
				</Balancer>
			</p>
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
		</section>
	);
};

export default Contact;
