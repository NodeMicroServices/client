import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
    const { t } = useTranslation('contact');
    const description = t('metaDescription');
    return (
        <Layout
            pageTitle="Chu Choice - Contact"
            currentPageUrl="/contact"
            metaInfo={[
                {
                    name: 'description',
                    content: description,
                },
            ]}
        >
            <h1>Contact us</h1>
            <address>
                Visit us at: <br />
                {t('contactAddress')}
                <br />
                Box 564, Disneyland
                <br />
                USA
            </address>
        </Layout>
    );
};

export default Contact;
