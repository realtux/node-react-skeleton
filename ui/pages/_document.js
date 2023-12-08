import { Head, Html, Main, NextScript } from 'next/document';
import theme, { roboto } from '../config/theme';

export default function Document(props) {
    return (
        <Html lang="en" className={roboto.className}>
            <Head>
                <meta name="theme-color" content={theme.palette.primary.main} />
                <link rel="shortcut icon" href="/images/favicon.png" />
                <meta name="emotion-insertion-point" content="" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
