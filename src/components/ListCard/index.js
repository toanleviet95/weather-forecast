import React from 'react';
import PropTypes from 'prop-types';
import Card from '@/components/Card';
import { DEFAULT_WEATHERS } from '@/shared/constants';

const ListCard = ({ data = { consolidated_weather: DEFAULT_WEATHERS, location: '' }, loading }) => {
  const { consolidated_weather: weathers, title: location } = data;

  // Only max of length with 5
  const requiredWeathers = weathers.slice(0, 5);

  return (
    <div className='forecast-table row'>
      <div className='forecast-container'>
        {requiredWeathers.map((weather, idx) =>
        (
          <div key={`weather_${weather.id}`} className={`forecast ${idx === 0 ? 'today' : 'col-md-3 col-xs-12'}`}>
            <Card
              isToday={idx === 0}
              loading={loading}
              date={weather.applicable_date}
              location={location}
              low={weather.min_temp}
              high={weather.max_temp}
              temp={weather.the_temp}
              state={weather.weather_state_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ListCard.propTypes = {
  data: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ListCard;
