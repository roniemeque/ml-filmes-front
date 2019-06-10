import fetch from "isomorphic-unfetch";

export const buscaTopRated = async () => {
  const response = await fetch(
    `${process.env.TMDB_BASE_URL}/movie/top_rated?api_key=${
      process.env.TMDB_API_KEY
    }&language=pt`,
  );

  const { results } = await response.json();

  //removendo filmes depois de 2014 para bater com o banco

  return results
    ? results.filter(({ release_date }) => release_date < "2015-01-01")
    : [];
};
