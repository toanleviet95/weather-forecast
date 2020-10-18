import React from 'react';
import SearchInput from '@/components/SearchInput';
import ListCard from '@/components/ListCard';
import useAsync from '@/shared/useAsync';
import weatherService from '@/services/weather.service';
import { DEFAULT_WEATHERS } from '@/shared/constants';
import { Title } from './index.styled';

const Main = () => {
  const { execute, value: weatherValue, status } = useAsync(weatherService, '', false);
  const weatherData = weatherValue && weatherValue.data ? weatherValue.data : { consolidated_weather: DEFAULT_WEATHERS, location: '' };

  const handleSelectLocation = (woeid) => {
    // Fetch weather data
    execute(woeid);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='container'>
          <Title>Weather Forecast</Title>
          <div className='hero row'>
            <SearchInput onSelect={handleSelectLocation} />
          </div>
          <div className='row'>
            <ListCard data={weatherData} loading={status === 'pending'} />
          </div>
        </div>
      </div>
    </div>
);
};

export default Main;
