import React from "react";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
    return (
        <footer>
            <p>&copy; Madame Organic { new Date().getFullYear() }</p>
        </footer>
    )
};

export default Footer;
