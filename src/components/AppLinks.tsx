import React from 'react';
import Link, { LinkProps } from 'next/link';

interface IAppLinksProps extends LinkProps {
    href: string;
    label: string;
}

const AppLinks: React.FC<IAppLinksProps> = ({ href, label }) => {
    return (
        <Link href={href}>
            <a>{label}</a>
        </Link>
    );
};

export default AppLinks;
