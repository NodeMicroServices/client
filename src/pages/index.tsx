import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

export default function Home() {
    const { t, lang } = useTranslation('home');
    const description = t('metaDescription');
    const keywords = t('metaKeywords');

    return (
        <Layout
            pageTitle="Chu Choice"
            currentPageUrl="/"
            metaInfo={[
                {
                    name: 'keywords',
                    content: keywords,
                },
                {
                    name: 'description',
                    content: description,
                },
            ]}
        >
            <h1>{t('welcomeText')}</h1>
        </Layout>
    );
}
