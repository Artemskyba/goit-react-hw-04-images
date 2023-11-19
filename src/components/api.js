import axios from 'axios';

const USER_KEY = '39755832-c186856aaaae5bdbab8f6e71b';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: USER_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(``, {
    params: {
      q: query,
      page: page,
    },
  });
  return response.data;
};
