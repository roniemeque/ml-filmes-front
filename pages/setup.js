import { useState, useEffect } from "react";
import styled from "styled-components";
import { pegaUser } from "../modules/user/storage";
import Router from "next/router";
import { buscaTopRated } from "../modules/filmes/tmdb.services";
import Filme from "../modules/filmes/Filme";
import { ButtonBlock } from "../modules/ui/Buttons";

const SetupStyled = styled.div``;

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

function Setup({ filmes: filmesIniciais }) {
  const [user, setUser] = useState();
  const [filmes, setFilmes] = useState(filmesIniciais);
  const [filmesAvaliados, setFilmesAvaliados] = useState([]);

  console.log(filmesAvaliados);

  useEffect(() => {
    const userGuardado = pegaUser();
    if (!userGuardado) {
      Router.push("/login");
    }

    setUser(userGuardado);
  }, [1]);

  const avaliarFilme = (id, nota) => {
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

    setFilmesAvaliados([...outrosFilmesAvaliados, filmeParaAvaliar]);
  };

  const podeSeguir = filmesAvaliados.length >= 10;

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
      <BotaoSeguir disponivel={podeSeguir}>
        {podeSeguir
          ? "Prosseguir"
          : `${filmesAvaliados.length ? "Avalie mais" : "Avalie"} ${10 -
              filmesAvaliados.length} filmes`}
      </BotaoSeguir>
    </SetupStyled>
  );
}

Setup.getInitialProps = async ({ req }) => {
  const filmes = await buscaTopRated();
  return { filmes };
};

export default Setup;
