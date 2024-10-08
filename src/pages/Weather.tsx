import React from 'react';
import GetWeather from '@/hooks/weatherapi';
import { AuthStore } from '../store/auth';
import { useQuery } from 'react-query';
import Loading from '@/app_components/state_components/Loading';
import Error from '@/app_components/state_components/Error'
import { WeatherData } from '@/types/types';
import WeatherDisplay from '@/app_components/WeatherDisplay';
function Weather() {
    const lat = AuthStore(state => state.latitude);
    const lon = AuthStore(state => state.longitude);


    const { isLoading, isError, data } = useQuery<WeatherData | null>(
        ['weather', lat, lon],
        () => GetWeather(lat, lon),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            enabled: lat !== undefined && lon !== undefined
        }
    );
    if (isLoading) return <div className="min-w-full flex-grow flex flex-col justify-center items-center pt-5"><Loading /></div>;
    if (isError) return <div className="min-w-full flex-grow flex flex-col justify-center items-center pt-5"><Error errorMessage="Error in fetching Weather data" /></div>;

    return (
        <div>
            {data && (
                <div >
                    <WeatherDisplay data={data} />
                </div>
            )}
        </div>
    );
}

export default Weather;
