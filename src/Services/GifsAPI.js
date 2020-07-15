const API_KEY = 'fkXF5TzuuTMVqOnd5QRuwOxTNOVtVE6R';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

const getGifs = async ({ keyword = 'pokemon', limit = 10, page = 0 }) => {
  const offset = limit * page;
  const url = `${BASE_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map(gif => {
    const url = gif.images.downsized_large.url;
    const { id, title } = gif;

    return { id, title, url };
  });
  return gifs;
};

export default getGifs;
