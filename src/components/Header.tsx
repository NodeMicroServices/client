import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import AppLinks from './AppLinks';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const { t } = useTranslation('common');

    return (
        <header style={{
            display: 'flex'
        }}>
            <AppLinks href="/" label={t('header.home')} />
            <nav style={{
                marginLeft: '2em'
            }}>
                <AppLinks href="/login" label={t('header.login')} />
                <AppLinks href="/register" label={t('header.register')} />
            </nav>
        </header>
    );
};

export default Header;
