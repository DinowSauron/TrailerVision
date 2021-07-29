
import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt/br">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet"/>

                    
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}