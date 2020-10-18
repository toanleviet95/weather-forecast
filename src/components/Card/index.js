import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Skeleton from '@/components/Skeleton';
import { WEATHER_STATE, DEFAULT_EMPTY_STRING } from '@/shared/constants';

const Card = ({ isToday, date, loading, location, low, high, temp, state }) => {
  if (loading) {
    return <Skeleton />;
  }

  if (isToday) {
    return (
      <>
        <div className='forecast-header'>
          <div className='day'>
            {date ? dayjs(date).format('dddd') : DEFAULT_EMPTY_STRING}
            {' '}
            (Today)
          </div>
          <div className='date'>
            {date ? dayjs(date).format('D MMM') : DEFAULT_EMPTY_STRING}
          </div>
        </div>
        <div className='forecast-content'>
          <div className='location'>
            <h3 id='city'>{location || DEFAULT_EMPTY_STRING}</h3>
          </div>
          <div className='degree'>
            <div className='num' id='tempnow'>
              {temp ? Math.round(temp) : DEFAULT_EMPTY_STRING}
              <sup>o</sup>
              C
            </div>
            <div className='forecast-icon'>
              <img src={state && WEATHER_STATE[state] ? WEATHER_STATE[state] : ''} alt={state} width={90} />
            </div>
          </div>
          <span id='windnow'>
            Low:  
            {' '}
            {low ? Math.round(low) : DEFAULT_EMPTY_STRING}
            <sup>o</sup>
            C
          </span>
          <span id='directionnow'>
            High:  
            {' '}
            {high ? Math.round(high) : DEFAULT_EMPTY_STRING}
            <sup>o</sup>
            C
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='forecast-header'>
        <div className='day'>
          {date ? dayjs(date).format('dddd') : DEFAULT_EMPTY_STRING}
        </div>
        <div className='date'>
          {date ? dayjs(date).format('D MMM') : DEFAULT_EMPTY_STRING}
        </div>
      </div>
      <div className='forecast-content'>
        <div className='forecast-icon'>
          <img
            src={state && WEATHER_STATE[state] ? WEATHER_STATE[state] : ''}
            alt={state}
            width={48}
          />
        </div>
        <div className='degree'>
          {temp ? Math.round(temp) : DEFAULT_EMPTY_STRING}
          <sup>o</sup>
          C
        </div>
        <div className='row'>
          <div className='col-md-12 col-md-offset-0 col-xs-4 col-xs-offset-2' style={{padding: '0px'}}>
            <small>
              Low: 
              {' '}
              {low ? Math.round(low) : DEFAULT_EMPTY_STRING}
              <sup>o</sup>
              C
            </small>
          </div>
          <div className='col-md-12 col-xs-4' style={{padding: '0px'}}>
            <small>
              High:  
              {' '}
              {high ? Math.round(high) : DEFAULT_EMPTY_STRING}
              <sup>o</sup>
              C
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  isToday: PropTypes.bool,
  date: PropTypes.string,
  loading: PropTypes.bool,
  location: PropTypes.string,
  low: PropTypes.number,
  high: PropTypes.number,
  temp: PropTypes.number,
  state: PropTypes.string,
};

Card.defaultProps = {
  isToday: false,
  date: '',
  loading: false,
  location: '',
  low: 0,
  high: 0,
  temp: 0,
  state: '',
};

export default Card;
