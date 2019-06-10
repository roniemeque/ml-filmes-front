import fetch from "isomorphic-unfetch";

export const buscaTopRated = async (pagina = 1) => {
  const response = await fetch(
    `${process.env.TMDB_BASE_URL}/movie/top_rated?api_key=${
      process.env.TMDB_API_KEY
    }&language=pt&page=${pagina}`,
  );

  const { results } = await response.json();

  //removendo filmes depois de 2014 para bater com o banco

  return results
    ? results.filter(({ release_date }) => release_date < "2015-01-01")
    : [];
};
