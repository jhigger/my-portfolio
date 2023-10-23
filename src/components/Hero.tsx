import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Balancer } from "react-wrap-balancer";
import Typewriter from "typewriter-effect";

const Hero = () => {
	const [aboutEl, setAboutEl] = useState<HTMLElement | null>(null);
	const ref = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		setAboutEl(document.getElementById("about-portal"));
	}, [aboutEl]);

	return (
		<section className="prose-base relative mx-auto flex min-h-screen flex-col justify-center md:prose-2xl prose-headings:font-bold lg:w-3/4">
			<div className="mb-4 text-base font-bold dark:text-gray-200">
				Hi, my name is
			</div>
			<h1 className="m-0 dark:text-gray-200 md:m-0">
				<span className="hidden">John Jhigger</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(1000)
							.typeString("Jhigger")
							.pauseFor(1000)
							.deleteAll()
							.typeString("Kairos")
							.pauseFor(1000)
							.deleteAll()
							.typeString("Jhiggs")
							.pauseFor(1000)
							.deleteAll()
							.start();
					}}
					options={{
						loop: true,
					}}
				/>
			</h1>
			<h2 className="mb-6 mt-2 text-3xl dark:text-gray-400 md:mt-4">
				I create stuff for the internet
			</h2>
			<p className="max-w-lg text-lg dark:text-gray-400">
				<Balancer>
					I&apos;m a self-taught web developer who&apos;s passionate
					about creating awesome stuff on the web.
				</Balancer>
			</p>
			<div className="absolute bottom-[15%] z-50 flex w-full items-center justify-center">
				<BsChevronDoubleDown
					className="btn btn-circle btn-outline border-neutral p-2"
					onClick={handleClick}
				/>
			</div>
			{aboutEl && createPortal(<div ref={ref} />, aboutEl)}
		</section>
	);
};

export default Hero;
