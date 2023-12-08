import theme from '#ui/config/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Layout from '../components/layout/Layout';
import { store } from '../store';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL + '/api/v1';
axios.defaults.validateStatus = () => true;

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>My Application</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}
