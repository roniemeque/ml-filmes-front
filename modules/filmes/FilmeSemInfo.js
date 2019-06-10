import { useState, useEffect } from "react";
import Filme from "./Filme";
import { buscaFilme } from "./tmdb.services";
import { SkeletonElemento } from "../loadings/SkeletonBase";

function FilmeSemInfo(props) {
  const [filme, setFilme] = useState(props.filme);

  useEffect(() => {
    async function buscaDetalhes() {
      const detalhes = await buscaFilme(props.tmdb_id);
      setFilme(detalhes);
    }
    buscaDetalhes();
  }, [1]);

  return filme && filme.poster_path ? (
    <Filme
      id={filme.id}
      key={filme.id}
      tmdb_id={filme.id}
      poster_path={filme.poster_path}
    />
  ) : (
    <SkeletonElemento width="20rem" height="32rem" />
  );
}

export default FilmeSemInfo;
