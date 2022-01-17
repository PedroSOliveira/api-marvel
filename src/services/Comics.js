import md5 from 'md5';
import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public/comics';

const PUBLIC_KEY = '2ce20b7ffa510ed2f930b705171627b0';
const PRIVATE_KEY = 'f03d78536786b17573c5a30739705a5fcb049130';

const time = Number(new Date());
// pub_key = 2ce20b7ffa510ed2f930b705171627b0
const hash = md5(time + PRIVATE_KEY + PUBLIC_KEY);

const title = 'Avengers';
// const limit = 8;
// const offset = 32;

// private_key = f03d78536786b17573c5a30739705a5fcb049130

export const ServiceApiComics = {

  getAllComics: async (limit, offset) => {
    try {

      // const response = await axios.get(`${BASE_URL}?ts=${time}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`);

      const response = await axios.get(`${BASE_URL}`, {
        params: { ts: time, apikey: PUBLIC_KEY, hash, limit, offset }
      });
      const comics = response.data.data;
      // console.log(response);

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

      // const { results: [comic, _ ] } = response.data.data;

      console.log(response);
      console.log(comic);

      return comic;

    } catch (error) {
      throw new Error(error.message);
    }
  },
};
