import Toggler from '@/components/ui/moontoggler';
import logo from '/png/logo-no-background.png';
import '@fontsource/roboto/500.css';
import { NavLink } from 'react-router-dom';
import Coordinates, { Coords } from '@/hooks/geolocation';
import { Button } from '@/components/ui/button';
import { AuthStore } from '@/store/auth';

function Header() {
    const isLocation = AuthStore((state) => state.isLocation);
    const locationData: Coords = Coordinates();

    const RedirectLinks = [
        { name: 'Home', link: '/' },
        { name: 'World', link: '/world' },
        { name: 'Weather', link: '/weather' },
        { name: 'Sports', link: '/sports' },
        { name: 'Tech', link: '/tech' },
    ];

    const handleLocationFetch = () => {
        const data = Coordinates();
    };

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
                    <Toggler />
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
                {
                    isLocation ? (
                        <div key={locationData.country}>
                            <NavLink
                                to={`/${locationData.country_code}`}
                                className={({ isActive }) =>
                                    `font-roboto max-sm:text-[0.8rem] text-xl ${isActive ? 'text-red-500' : ''}`
                                }
                            >
                                {locationData.country}
                            </NavLink>
                        </div>
                    ) : (
                        <Button onClick={handleLocationFetch} className='items-top h-fit pt-1 md:pt-[6px] pl-0 max-sm:text-[0.8rem] font-roboto' variant={'ghost'}>My Country</Button>
                    )
                }
            </div>
        </div>
    );
}

export default Header;
