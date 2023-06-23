import { Balancer } from "react-wrap-balancer";

const Hero = () => {
	return (
		<section className="prose-2xl mx-auto flex w-2/3 flex-col justify-center gap-2 prose-headings:font-extrabold">
			<div className="text-lg font-bold text-gray-100">
				Hi, my name is
			</div>
			<>
				<h1 className="m-0 mb-4 text-gray-50">John Jhigger</h1>
				<h2 className="m-0 mb-4 text-gray-200">
					I build things for the web
				</h2>
			</>
			<p className="max-w-lg text-lg text-gray-200">
				<Balancer>
					I&apos;m a self-taught web developer who&apos;s passionate
					about creating awesome stuff on the web.
				</Balancer>
			</p>
		</section>
	);
};

export default Hero;
