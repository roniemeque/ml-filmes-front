import styled from "styled-components";
import { useState } from "react";
import { pegarRecomendacoes } from "../modules/user/user.services";
import FilmeSemInfo from "../modules/filmes/FilmeSemInfo";

import { Titulo2 } from "../modules/ui/Tipografia";

const RecomendacoesStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
  }
`;

const FilmesLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Recomendacoes({ filmesInitial }) {
  const [filmes, setFilmes] = useState(filmesInitial);

  console.log("filmes", filmes);

  return filmes.length ? (
    <RecomendacoesStyled>
      <FilmesLista>
        {filmes.map(({ id, tmdb_id }) => {
          return <FilmeSemInfo id={id} key={id} tmdb_id={tmdb_id} />;
        })}
      </FilmesLista>
    </RecomendacoesStyled>
  ) : (
    <RecomendacoesStyled>
      <Titulo2>Vazio por aqui 😐</Titulo2>
      <p>Em breve sugestões com base nos seus gostos aparecerão aqui.</p>
      <p>
        <i>
          (O user pode ir navegando na plataforma enquanto as recomendações não
          estão prontas)
        </i>
      </p>
    </RecomendacoesStyled>
  );
}

Recomendacoes.getInitialProps = async ({ query }) => {
  const filmesInitial = await pegarRecomendacoes(query.user_id);
  return { filmesInitial };
};

export default Recomendacoes;
