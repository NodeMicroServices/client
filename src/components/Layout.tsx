import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface IMetaInfo {
    name: string;
    content: string;
}

interface ILayoutProps {
    pageTitle: string;
    metaInfo?: IMetaInfo[] | undefined;
    currentPageUrl: string;
}

const Layout: React.FC<ILayoutProps> = ({ pageTitle, metaInfo, currentPageUrl, children }) => {
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
            <Head>
                <title>{pageTitle}</title>
                <link
                    rel="alternate"
                    href={alternateUrlForAnotherLanguage}
                    hrefLang={isCurrentLanguageThai ? 'en' : 'th'}
                />
                <link rel="canonical" href={canonicalUrl} />
                {metaInfo &&
                    metaInfo.map((info) => (
                        <meta name={info.name} content={info.content} key={info.name} />
                    ))}
            </Head>
            <main>{children}</main>
        </>
    );
};

export default Layout;
