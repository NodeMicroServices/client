import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import AppLinks from './AppLinks';
import axiosForSS from "../lib/axiosForSS";
import { IUserJWTInfo } from "../interface/currentUser";

interface IHeaderProps {
    data?: IUserJWTInfo;
}

const Header: React.FC<IHeaderProps> = ({ data }) => {
    const { t } = useTranslation('common');

    return (
        <header style={{
            display: 'flex'
        }}>
            <AppLinks href="/" label={t('header.home')} />
            <nav style={{
                marginLeft: 'auto'
            }}>
                {!data
                    ? <>
                        <AppLinks href="/login" className="mx-lg-3" label={t('header.login')} />
                        <AppLinks href="/register" className="mx-lg-3" label={t('header.register')} />
                    </>
                    : <AppLinks href="/logout" className="mx-lg-3" label={t('header.logout')} />
                }
            </nav>
        </header>
    );
};

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

export default Header;
