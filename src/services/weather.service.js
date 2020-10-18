import axios from 'axios';

const weatherService = (id) => axios({
    url: `${process.env.API_ENDPOINT}/location/${id}`,
    method: 'get',
  });

export default weatherService;
