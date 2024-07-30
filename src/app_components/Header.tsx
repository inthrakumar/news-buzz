import React from 'react';
import { useTheme } from '@/context/themeprovider';
import Toggler from '@/components/ui/moontoggler';
import logo from '/png/logo-no-background.png';
import white_logo from '/png/logo-white-removebg.png';
import '@fontsource/roboto/500.css';
import { NavLink } from 'react-router-dom';
import useCoordinates, { Coords } from '@/hooks/geolocation';
import { AuthStore } from '@/store/auth';

function Header() {
    const { theme } = useTheme();
    const headerLogo = theme === 'light' ? logo : white_logo;

    const isLocation = AuthStore((state) => state.isLocation);
    const locationData = useCoordinates();

    const RedirectLinks = [
        { name: 'Home', link: '/' },
        { name: 'Entertainment', link: '/entertainment' },
        { name: 'Weather', link: '/weather' },
        { name: 'Sports', link: '/sports' },
        { name: 'Tech', link: '/tech' },
        { name: 'Politics', link: '/politics' },
        { name: `${locationData.country}`, link: `/country-news` },
    ];

    return (
        <div className=''>
            <div className='flex justify-between w-full h-fit'>
                <div className='flex'>
                    <div className='w-[90px] h-[90px] max-sm:w-[60px] max-sm:h-[60px] max-sm:text-2xl'>
                        <img src={headerLogo} className='w-fit h-full object-contain' alt='logo' />
                    </div>
                    <div className='font-roboto font-semibold text-3xl h-full flex justify-center items-center max-sm:text-2xl'>
                        <p>NEWS <span className='text-red-600'>BUZZ</span></p>
                    </div>
                </div>
                <div className='h-inherit flex justify-center items-center pr-[1.5rem]'>
                    <Toggler />
                </div>
            </div>
            <div className='flex w-fit gap-3 m-auto max-sm:gap-[0.5rem]'>
                {RedirectLinks.map((redirect) => (
                    <div key={redirect.link}>
                        <NavLink
                            to={redirect.link}
                            className={({ isActive }) =>
                                `font-roboto max-sm:text-[0.7rem] text-xl ${isActive ? 'text-red-500' : ''}`
                            }
                        >
                            {redirect.name}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;
