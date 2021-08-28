import React from 'react';
import Layout from '../components/Layout';

interface IAboutProps {}

const Login: React.FC<IAboutProps> = () => {
    return (
        <Layout
            pageTitle="MS-Client - Login"
            currentPageUrl="/login"
            metaInfo={[
                {
                    name: 'robots',
                    content: 'noindex',
                },
            ]}
        >
            <h1>Login Page</h1>
            <p>
                Some Kinda Form goes Here
            </p>
        </Layout>
    );
};

export default Login;
