import React, { useEffect, useState } from 'react';
import Toggler from '@/components/ui/moontoggler';
import logo from '/png/logo-no-background.png';
import '@fontsource/roboto/500.css';
import { NavLink } from 'react-router-dom';
import Coordinates from '@/hooks/geolocation';

function Header() {
    const [locationData, setLocationData] = useState({ country: '', country_code: '' });

    useEffect(() => {
        const fetchCoordinates = async () => {
            const data = await Coordinates();
            if (data) {
                setLocationData(data);
            }
        };

        fetchCoordinates();
    }, []);

    const RedirectLinks = [
        { name: 'Home', link: '/' },
        { name: 'World', link: '/world' },
        { name: 'Weather', link: '/weather' },
        { name: 'Sports', link: '/sports' },
        { name: 'Tech', link: '/tech' },
        { name: locationData.country, link: `/country/${locationData.country_code}` },
    ];

    return (
        <div>
            <div className='flex justify-between w-full h-fit'>
                <div className='flex'>
                    <div className='w-[90px] h-[90px] max-sm:w-[60px] max-sm:h-[60px] max-sm:text-2xl '>
                        <img src={logo} className='w-fit h-full object-contain' alt='logo' />
                    </div>
                    <div className='font-roboto font-semibold text-3xl h-full flex justify-center items-center max-sm:text-2xl '>
                        <p>NEWS BUZZ</p>
                    </div>
                </div>
                <div className='h-inherit flex justify-center items-center pr-[1.5rem]'>
                    <div><Toggler /></div>
                </div>
            </div>
            <div className='flex w-fit gap-3 m-auto max-sm:gap-[0.5rem]'>
                {RedirectLinks.map((redirect) => (
                    <div key={redirect.link}>
                        <NavLink
                            to={redirect.link}
                            className={({ isActive }) =>
                                `font-roboto max-sm:text-[0.8rem] text-xl ${isActive ? 'text-red-500' : ''}`
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
