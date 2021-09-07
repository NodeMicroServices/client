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
    const { data } = props;

    // const { sendRequest, errors } = useRequest({
    //     url: `${process.env.NEXT_PUBLIC_AUTH_SERVER}/me`,
    //     method: 'get',
    // });
    const onClick = async (e) => {
        e.preventDefault();
        // await sendRequest();
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

export async function getServerSideProps(context) {
    // Send req, get data and return that data
    try {
        // const  client = buildClient(context);
        const { req } = context;
        console.log('I AM EXECUTED')
        const serverUrl = `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local`;
        const { data } = await axios.get(`${serverUrl}/api/users/me`, {
            headers: req.headers
        });
        return { props: { data: data.data }};
    } catch (e) {
        console.log('Error:::', e);
        return {};
    }
}

export default Home;
