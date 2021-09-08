import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import '../styles/index.css';
import * as gtag from '../lib/gtag';
import 'bootstrap/dist/css/bootstrap.css';
import axiosForSS from "../lib/axiosForSS";

function CustomApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const queryCache = new QueryClient();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageView(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <div className="mainContainer container">
            <QueryClientProvider client={queryCache}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </div>
    );
}

export default CustomApp;
