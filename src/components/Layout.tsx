import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from "./Header";
import Footer from "./Footer";

interface IMetaInfo {
    name: string;
    content: string;
}

interface ILayoutProps {
    pageTitle: string;
    currentPageUrl?: string;
    metaInfo?: IMetaInfo[] | undefined;
    [x: string]: any;
}

const Layout: React.FC<ILayoutProps> = (props) => {
    const { pageTitle, metaInfo, currentPageUrl, children } = props;
    const router = useRouter();
    const { locale } = router;
    const isCurrentLanguageThai = locale === 'th';
    // const currentPageUrlFormatted = currentPageUrl === "/" ? "" : currentPageUrl;
    const alternateBaseUrl = isCurrentLanguageThai
        ? 'https://chuchoice.com/en'
        : 'https://chuchoice.com';
    const alternateUrlForAnotherLanguage = `${alternateBaseUrl}${currentPageUrl}`;
    const canonicalUrl = isCurrentLanguageThai
        ? `https://chuchoice.com${currentPageUrl}`
        : `https://chuchoice.com/en${currentPageUrl}`;

    return (
        <>
            <Header />
            <Head>
                <title>{pageTitle}</title>
                {currentPageUrl && <link
                    rel="alternate"
                    href={alternateUrlForAnotherLanguage}
                    hrefLang={isCurrentLanguageThai ? 'en' : 'th'}
                />}
                {currentPageUrl && <link rel="canonical" href={canonicalUrl} />}
                {metaInfo &&
                    metaInfo.map((info) => (
                        <meta name={info.name} content={info.content} key={info.name} />
                    ))}
            </Head>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
