import styled from "styled-components";
import { pegarSugestoes } from "../modules/user/user.services";

import { Titulo2 } from "../modules/ui/Tipografia";

const RecomendacoesStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
  }
`;

function Recomendacoes({ sugestoes }) {
  return sugestoes.length ? (
    <RecomendacoesStyled />
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
  const sugestoes = await pegarSugestoes(query.user_id);
  return { sugestoes };
};

export default Recomendacoes;
