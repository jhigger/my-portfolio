import Document, {
	type DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx);

		return initalProps;
	}

	render() {
		return (
			<Html>
				<Head></Head>
				<body className="scrollbar-thin scrollbar-track-gray-500/50 scrollbar-thumb-gray-950/50 dark:scrollbar-track-gray-950/50 dark:scrollbar-thumb-gray-50/50">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
