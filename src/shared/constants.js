export const WEATHER_STATE = {
  'Snow': `${process.env.IMAGE_ENDPOINT}/weather/sn.svg`,
  'Sleet': `${process.env.IMAGE_ENDPOINT}/weather/sl.svg`,
  'Hail': `${process.env.IMAGE_ENDPOINT}/weather/h.svg`,
  'Thunderstorm': `${process.env.IMAGE_ENDPOINT}/weather/t.svg`,
  'Heavy Rain': `${process.env.IMAGE_ENDPOINT}/weather/hr.svg`,
  'Light Rain': `${process.env.IMAGE_ENDPOINT}/weather/lr.svg`,
  'Showers': `${process.env.IMAGE_ENDPOINT}/weather/s.svg`,
  'Heavy Cloud': `${process.env.IMAGE_ENDPOINT}/weather/hc.svg`,
  'Light Cloud': `${process.env.IMAGE_ENDPOINT}/weather/lc.svg`,
  'Clear': `${process.env.IMAGE_ENDPOINT}/weather/c.svg`,
};

export const DEFAULT_EMPTY_STRING = '--';

export const DEBOUNCE_TIME = 800; // ms

export const DEFAULT_WEATHERS = [
  {
    id: 1,
    date: '',
    location: '',
    low: 0,
    high: 0,
    temp: 0,
    state: '',
  },
  {
    id: 2,
    date: '',
    location: '',
    low: 0,
    high: 0,
    temp: 0,
    state: '',
  },
  {
    date: '',
    location: '',
    low: 0,
    high: 0,
    temp: 0,
    state: '',
  },
  {
    id: 3,
    date: '',
    location: '',
    low: 0,
    high: 0,
    temp: 0,
    state: '',
  },
  {
    id: 4,
    date: '',
    location: '',
    low: 0,
    high: 0,
    temp: 0,
    state: '',
  },
];

export default WEATHER_STATE;
