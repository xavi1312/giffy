const API_KEY = 'fkXF5TzuuTMVqOnd5QRuwOxTNOVtVE6R';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

// Extract gif info from response data
function resToGifs(data) {
  return data.map(gif => {
    const url = gif.images.original.webp;
    const { id, title } = gif;

    return { id, title, url };
  });
}

const getGifs = async ({ keyword = 'pokemon', limit = 15, page = 0 }) => {
  const offset = limit * page + 1;
  const url = `${BASE_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
  let gifs;
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error('Error to fetching Gifs');

    const { data } = await res.json();
    gifs = resToGifs(data);
  } catch (error) {
    console.error(error.message);
  }
  return gifs || [];
};

export default getGifs;
