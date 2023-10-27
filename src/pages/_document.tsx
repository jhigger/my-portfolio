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
			<Html className="scrollbar-thin scrollbar-track-gray-950/50 scrollbar-thumb-gray-50/50">
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
