import Head from "next/head";

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
			<main className="flex min-h-screen flex-col items-center justify-center bg-gray-950">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
					<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
						Hello, World!
					</h1>
				</div>
			</main>
		</>
	);
}
