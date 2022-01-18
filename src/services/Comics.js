import md5 from 'md5';
import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public/comics';

const PUBLIC_KEY = '';
const PRIVATE_KEY = '';
const time = Number(new Date());
const hash = md5(time + PRIVATE_KEY + PUBLIC_KEY);

export const ServiceApiComics = {

  getAllComics: async (limit, offset, title) => {
    try {
      let url = BASE_URL;
      if(title) url += `?title=${title}`;
      
      const response = await axios.get(`${url}`, {
        params: { ts: time, apikey: PUBLIC_KEY, hash, limit, offset }
      });
      const comics = response.data.data;

      return comics;

    } catch (error) {
      throw new Error(error.message);
    }
  },

  getComic: async (comicId) => {
    try {

      const response = await axios.get(
        `${BASE_URL}/${comicId}?ts=${time}&apikey=${PUBLIC_KEY}&hash=${hash}`);

      const comic = response.data.data.results.shift();

      console.log(response);
      console.log(comic);

      return comic;

    } catch (error) {
      throw new Error(error.message);
    }
  },
};
