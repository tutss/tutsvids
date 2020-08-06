import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const r = await response.json();
      return r;
    }
    throw new Error('Não foi possível pegar os dados: ');
  });
}

export default {
  getAllWithVideos,
};
