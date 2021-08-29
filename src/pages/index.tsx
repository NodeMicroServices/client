import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextPage } from "next";
import axios from "axios";

import Layout from '../components/Layout';
import useRequest from "../hooks/useRequest";

interface IHomeProps {
    data?: {
        id: string;
        email: string;
    }
}

const Home: NextPage<IHomeProps> = (props) => {
    const { t, lang } = useTranslation('home');
    const description = t('metaDescription');
    const keywords = t('metaKeywords');

    const { sendRequest, errors } = useRequest({
        url: `${process.env.NEXT_PUBLIC_AUTH_SERVER}/me`,
        method: 'get',
    });

    const onClick = async (e) => {
        e.preventDefault();
        await sendRequest();
    }

    return (
        <Layout
            pageTitle="Micro Service Client"
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
            <button onClick={onClick}>Want to get User Info</button>
        </Layout>
    );
}

Home.getInitialProps = async ({ req }) => {
    // Send req, get data and return that data
    try {
        console.log(`Requesting data from ${process.env.NEXT_PUBLIC_AUTH_SERVER}/me`);
        const user = await axios.get(`${process.env.NEXT_PUBLIC_AUTH_SERVER}/me`);
        return user.data;
    } catch (e) {
        return {};
    }
}

export default Home;
