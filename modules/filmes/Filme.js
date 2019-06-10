import { useState } from "react";
import styled from "styled-components";

const RangeNotas = [
  { nota: 1, emoji: "😡" },
  { nota: 2, emoji: "😒" },
  { nota: 3, emoji: "😐" },
  { nota: 4, emoji: "😄" },
  { nota: 5, emoji: "😍" },
];

const FilmeStyled = styled.div`
  margin: 1rem auto;
  padding: 1rem;
`;

const Poster = styled.img`
  border-radius: 3px;
  box-shadow: 0 0 20px #d66f63bf;
`;

const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const EmojiButton = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 2.2rem;
  transition: all 0.2s;
  ${({ selecionado }) =>
    selecionado &&
    `
    background: salmon;
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  `}
`;

function Filme({ id, poster_path, notaDada, avaliarFilme }) {
  const [nota, setNota] = useState(0);

  return (
    <FilmeStyled>
      <Poster src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
      <RangeWrapper>
        {RangeNotas.map(step => (
          <EmojiButton
            onClick={() => avaliarFilme(id, step.nota)}
            selecionado={step.nota === notaDada}
            key={step.nota}
          >
            {step.emoji}
          </EmojiButton>
        ))}
      </RangeWrapper>
    </FilmeStyled>
  );
}

export default Filme;
