import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';

interface IContactProps {}

const Register: React.FC<IContactProps> = () => {
    const { t } = useTranslation('register');
    const description = t('metaDescription');
    return (
        <Layout
            pageTitle="MS-client - Register"
            currentPageUrl="/signup"
            metaInfo={[
                {
                    name: 'robots',
                    content: 'noindex',
                },
            ]}
        >
            <h1>Register Page</h1>
            <p>
                Some Kinda Form goes Here
            </p>
        </Layout>
    );
};

export default Register;
