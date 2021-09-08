import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextPage } from "next";

import Layout from '../components/Layout';
import { IUserJWTInfo } from "../interface/currentUser";
import axiosForSS from "../lib/axiosForSS";
import useRequest from "../hooks/useRequest";

interface IHomeProps {
    data?: IUserJWTInfo
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
            currentUser={data}
        >
            <h1>Welcome {data ? data.email : 'Stranger'}</h1>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    try {
        const client = axiosForSS(context);
        const { data } = await client.get(`/api/users/me`);
        return { props: { data: data.data }};
    } catch (e) {
        console.log('Error occurred while fetching data', e);
        return {};
    }
}

export default Home;
