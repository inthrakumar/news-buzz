import React from 'react';
import logo from '/png/logo-no-background.png';
import white_logo from '/png/logo-white-removebg.png';
import { useTheme } from '@/context/themeprovider';
type Error = {
    errorMessage: string
}
const Error_Component = ({ errorMessage }: Error) => {

    const { theme } = useTheme();
    const headerLogo = theme === 'light' ? logo : white_logo;
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <img src={headerLogo} alt="Site Logo" className="w-24 h-auto mb-4" />

            <p className="text-lg text-red-500">{errorMessage}</p>

        </div>
    );
};

export default Error_Component;
