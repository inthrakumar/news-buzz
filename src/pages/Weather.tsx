import React from 'react';
import GetWeather from '@/hooks/weatherapi';
import { AuthStore } from '../store/auth';
import { useQuery } from 'react-query';
import Loading from '@/app_components/state_components/Loading';
import Error from '@/app_components/state_components/Error'

function Weather() {
    const lat = AuthStore(state => state.latitude);
    const lon = AuthStore(state => state.longitude);


    const { isLoading, isError, data } = useQuery(
        ['weather', lat, lon],
        () => GetWeather(lat, lon),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            enabled: lat !== undefined && lon !== undefined
        }
    );
    if (isLoading) return <div><Loading /></div>;
    if (isError) return <div><Error errorMessage="Error in fetching Weather data" /></div>;

    return (
        <div>
            {data && (
                <div>
                </div>
            )}
        </div>
    );
}

export default Weather;
