import Head from "next/head";
import Hero from "~/components/Hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>John Jhigger</title>
				<meta
					name="description"
					content="John Jhigger is a self-taught web developer who's passionate about creating awesome stuff on the web."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex min-h-screen items-center justify-center bg-gray-950">
				<div className="container mx-auto px-4 py-16">
					<Hero />
				</div>
			</main>
		</>
	);
}
