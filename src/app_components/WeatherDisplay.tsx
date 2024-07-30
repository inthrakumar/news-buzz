import { WeatherData } from '@/types/types';
import React from 'react';
import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card';
import '@fontsource-variable/faustina';

type Weather = {
    data: WeatherData;
};

function WeatherDisplay({ data }: Weather) {
    return (
        <Card className='text-[#000]  dark:text-[#fff] text-xl max-w-[90%]  mt-5 h-auto  mx-auto flex flex-col  max-sm:gap-4 gap-6 p-6 shadow-lg rounded-lg font-Faustina'>
            <CardDescription className='text-[30px] max-sm:text-[23px] dark:text-[#fff] font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[#000]'>
                City: <span className='font-normal text-[25px] max-sm:text-[20px]'>{data.name}</span>
            </CardDescription>

            <CardDescription className='flex flex-col items-center dark:text-[#fff] text-[#000] text-[20px] max-sm:text-[16px]'>
                <div className='flex gap-4'>
                    <p>Latitude: {data.coord.lat}</p>
                    <p>Longitude: {data.coord.lon}</p>
                </div>
            </CardDescription>
            <CardContent className='flex flex-col items-center gap-4'>
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    className='w-44 h-44 object-cover'
                />
                <CardContent className='flex flex-col gap-2'>
                    <CardDescription className='flex gap-2 dark:text-[#fff] text-[#000] text-[18px] max-sm:text-[12px]'>
                        <span className='font-semibold'>Temperature:</span> <span>{data.main.temp}K</span>
                    </CardDescription>
                    <CardDescription className='flex gap-2 dark:text-[#fff]  text-[#000] text-[18px] max-sm:text-[12px]'>
                        <span className='font-semibold'>Humidity:</span> <span>{data.main.humidity}%</span>
                    </CardDescription>
                    <CardDescription className='flex gap-2  dark:text-[#fff] text-[#000] text-[18px] max-sm:text-[12px]'>
                        <span className='font-semibold'>Wind Speed:</span> <span>{data.wind.speed} m/s</span>
                    </CardDescription>
                    <CardDescription className='text-center dark:text-[#fff]  text-[#000] text-[18px] max-sm:text-[12px]'>
                        <span className='font-semibold'>Description:</span> <span>{data.weather[0].description}</span>
                    </CardDescription>
                </CardContent>

            </CardContent>
            <CardContent className='flex flex-col gap-2 items-center w-full '>
                <CardDescription className='flex gap-2 max-sm:gap-1 dark:text-[#fff]  text-[#000] text-[18px] text-left max-sm:text-[12px]'>
                    <span className='font-semibold'>Max Temperature:</span> <span>{data.main.temp_max}K</span>
                </CardDescription>
                <CardDescription className='flex gap-2 max-sm:gap-1 dark:text-[#fff] text-[#000] text-[18px] text-left max-sm:text-[12px]'>
                    <span className='font-semibold'>Min Temperature:</span> <span>{data.main.temp_min}K</span>
                </CardDescription>
                <CardDescription className='flex gap-2 max-sm:gap-1 dark:text-[#fff] text-[#000] text-[18px] text-left max-sm:text-[12px]'>
                    <span className='font-semibold'>Pressure:</span> <span>{data.main.pressure} hPa</span>
                </CardDescription>
                <CardDescription className='flex gap-2 max-sm:gap-1 dark:text-[#fff] text-[#000] text-[18px] text-left max-sm:text-[12px]'>
                    <span className='font-semibold'>Feels Like:</span> <span>{data.main.feels_like}K</span>
                </CardDescription>
                <CardDescription className='flex gap-2 max-sm:gap-1 dark:text-[#fff] text-[#000] text-[18px] text-left max-sm:text-[12px]'>
                    <span className='font-semibold'>Sunrise:</span> <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                </CardDescription>
                <CardDescription className='flex gap-2 max-sm:gap-1 dark:text-[#fff] text-[#000] text-[18px] text-left max-sm:text-[12px]'>
                    <span className='font-semibold'>Sunset:</span> <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
                </CardDescription>
            </CardContent>

        </Card>

    );
}

export default WeatherDisplay;
