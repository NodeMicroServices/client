import React, { useEffect } from 'react';
import useRequest from "../hooks/useRequest";
import Router from "next/router";
import Layout from "../components/Layout";

interface ILogoutProps {}

const logout: React.FC<ILogoutProps> = () => {
    const { sendRequest, errors } = useRequest({
        url: '/api/users/sign-out',
        onSuccess: () => Router.push('/'),
        method: 'post'
    });

    useEffect(() => {
        sendRequest().catch(err => console.error('Failed to log you out. Please refresh & try again!', err));
    }, []);

    return (
        <Layout pageTitle="Logout">
            <h4>
                Signing you out...
            </h4>
            {errors}
        </Layout>
    );
}

export default logout;
