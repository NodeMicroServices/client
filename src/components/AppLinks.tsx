import React from 'react';
import Link, { LinkProps } from 'next/link';

interface IAppLinksProps extends LinkProps {
    href: string;
    label: string;
    [x: string]: any;
}

const AppLinks: React.FC<IAppLinksProps> = (props) => {
    const { href, label, ...restProps } = props;
    return (
        <Link href={href}>
            <a {...restProps}>{label}</a>
        </Link>
    );
};

export default AppLinks;
