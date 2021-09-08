import React, {useState} from 'react';
import Layout from '../components/Layout';
import useRequest from "../hooks/useRequest";
import Router from "next/router";

interface IAboutProps {}

const Login: React.FC<IAboutProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { sendRequest, errors } = useRequest({
        url: `${process.env.NEXT_PUBLIC_AUTH_SERVER}/sign-in`,
        method: 'post',
        body: {
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
            pageTitle="MS-Client - Login"
            currentPageUrl="/login"
            metaInfo={[
                {
                    name: 'robots',
                    content: 'noindex',
                },
            ]}
        >
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
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
                <div className="form-group mt-lg-4">
                    <button type="submit" className="btn btn-primary">Sign-In</button>
                </div>
            </form>
        </Layout>
    );
};

export default Login;
