import { useState, useEffect } from "react";
import styled from "styled-components";
import { pegaUser } from "../modules/user/storage";
import { atualizarMedias } from "../modules/user/user.services";
import Router from "next/router";
import { buscaTopRated } from "../modules/filmes/tmdb.services";
import { salvarAvaliacao } from "../modules/filmes/filmes.service";
import Filme from "../modules/filmes/Filme";
import { ButtonBlock } from "../modules/ui/Buttons";
import NProgress from "nprogress";

const MINIMO_NOTAS = 3;

const SetupStyled = styled.div`
  padding-bottom: 8rem;
`;

const TextoIntroducao = styled.p`
  font-size: 1.6rem;
  padding: 0 0.5rem;
  color: #666;
  text-align: center;
`;

const FilmesLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoSeguir = styled(ButtonBlock)`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => (props.disponivel ? "salmon" : "#a7a7a7")};
`;

const BotaoCarregarMais = styled(ButtonBlock)`
  background: #62bb31;
  margin-top: 2rem;
  margin: 2rem auto;
`;

function Setup({ filmes: filmesIniciais }) {
  const [user, setUser] = useState();
  const [filmes, setFilmes] = useState(filmesIniciais);
  const [proximaPagina, setProximaPagina] = useState(2);
  const [filmesAvaliados, setFilmesAvaliados] = useState([]);

  useEffect(() => {
    const userGuardado = pegaUser();
    if (!userGuardado) {
      Router.push("/login");
    }

    setUser(userGuardado);
  }, [1]);

  const avaliarFilme = async (id, nota) => {
    //se ja tem, atualiza
    const filmeParaAvaliar = filmesAvaliados.find(
      filmeAvaliado => filmeAvaliado.id === id,
    ) || {
      id,
      nota,
    };

    filmeParaAvaliar.nota = nota;

    const outrosFilmesAvaliados = filmesAvaliados.filter(
      outroFilmeAvaliado => id !== outroFilmeAvaliado.id,
    );

    await salvarAvaliacao(filmeParaAvaliar);

    setFilmesAvaliados([...outrosFilmesAvaliados, filmeParaAvaliar]);
  };

  const atualizaMediasESegue = async () => {
    if (!podeSeguir) return;

    NProgress.start();
    await atualizarMedias();

    Router.push(
      `/recomendacoes?user_id=${user.id}`,
      `/recomendacoes?user_id=${user.id}`,
      {
        query: {
          user_id: user.id,
        },
      },
    );
  };

  const carregaMaisFilmes = async () => {
    const proximosFilmes = await buscaTopRated(proximaPagina);
    setFilmes([...filmes, ...proximosFilmes]);

    setProximaPagina(proximaPagina + 1);
  };

  const podeSeguir = filmesAvaliados.length >= MINIMO_NOTAS;

  return (
    <SetupStyled>
      <TextoIntroducao>
        Avalie alguns filmes para começar a receber sugestões.
      </TextoIntroducao>
      <TextoIntroducao>Quanto mais avaliar, melhor elas serão.</TextoIntroducao>
      <FilmesLista>
        {filmes.map(({ id, poster_path }) => {
          const { nota: notaDada } =
            filmesAvaliados.find(filmeAvaliado => filmeAvaliado.id === id) ||
            {};

          return (
            <Filme
              id={id}
              avaliarFilme={avaliarFilme}
              key={id}
              tmdb_id={id}
              poster_path={poster_path}
              notaDada={notaDada}
            />
          );
        })}
      </FilmesLista>
      <BotaoSeguir disponivel={podeSeguir} onClick={atualizaMediasESegue}>
        {podeSeguir
          ? "Prosseguir"
          : `${
              filmesAvaliados.length ? "Avalie mais" : "Avalie"
            } ${MINIMO_NOTAS - filmesAvaliados.length} filmes`}
      </BotaoSeguir>
      <BotaoCarregarMais onClick={carregaMaisFilmes}>
        Carregar mais
      </BotaoCarregarMais>
    </SetupStyled>
  );
}

Setup.getInitialProps = async ({ req }) => {
  const filmes = await buscaTopRated();
  return { filmes };
};

export default Setup;
