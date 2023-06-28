import { Balancer } from "react-wrap-balancer";

const Hero = () => {
	return (
		<section className="prose-base mx-auto flex flex-col md:prose-2xl prose-headings:font-bold lg:w-2/3">
			<div className="mb-4 text-base font-bold text-gray-200">
				Hi, my name is
			</div>
			<h1 className="m-0 text-gray-200 md:m-0">John Jhigger</h1>
			<h2 className="mb-6 mt-2 text-3xl text-gray-400 md:mt-4">
				I build things for the web
			</h2>
			<p className="max-w-lg text-lg text-gray-400">
				<Balancer>
					I&apos;m a self-taught web developer who&apos;s passionate
					about creating awesome stuff on the web.
				</Balancer>
			</p>
		</section>
	);
};

export default Hero;
