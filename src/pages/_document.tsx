import Document, {
	type DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx);

		return initalProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<Script src="/theme.js" strategy="beforeInteractive" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
