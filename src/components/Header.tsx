import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import AppLinks from './AppLinks';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const router = useRouter();
    const { locale, asPath } = router;
    const isServer = typeof window === 'undefined';
    const [language, setLanguage] = useState(locale);
    const { t } = useTranslation('common');

    const changeLanguage = (e) => {
        e.preventDefault();
        const lang = e.target.value;
        if (!isServer) {
            localStorage.setItem('lang', lang);
        }
        router.push(asPath, asPath, { locale: lang }).then(() => {
            setLanguage(lang);
        });
    };

    return (
        <header>
            <AppLinks href="/" label={t('header.home')} />
            <nav>
                <AppLinks href="/about" label={t('header.about')} />
                <AppLinks href="/contact" label={t('header.contact')} />
            </nav>
            <nav>
                <select name="lang" id="language" value={language} onChange={changeLanguage}>
                    <option value="en">EN</option>
                    <option value="th">ไทย</option>
                </select>
            </nav>
        </header>
    );
};

export default Header;
