import React, {useState} from 'react';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/Layout';
import useRequest from "../hooks/useRequest";
import Router from "next/router";

interface IRegisterProps {}

const Register: React.FC<IRegisterProps> = () => {
    const { t } = useTranslation('register');
    const description = t('metaDescription');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { sendRequest, errors } = useRequest({
        url: `${process.env.NEXT_PUBLIC_AUTH_SERVER}/sign-up`,
        method: 'post',
        body: {
            firstName,
            lastName,
            email,
            password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await sendRequest();
    }

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
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="firstName"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="lastName"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        required
                    />
                </div>
                {errors}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </Layout>
    );
};

export default Register;
