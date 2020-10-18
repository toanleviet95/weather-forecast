import axios from 'axios';

const locationService = (param) => axios({
    url: `${process.env.API_ENDPOINT}/location/search/?query=${param}`,
    method: 'get',
  });

export default locationService;
