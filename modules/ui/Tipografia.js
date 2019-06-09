import styled from "styled-components";

export const TituloPrimario = styled.h1`
  text-transform: uppercase;
  max-width: 40rem;
  font-weight: 300;
  font-size: 2.8rem;
  line-height: 1.4;
`;

export const Titulo1 = styled.h3`
  font-size: ${props => (props.grande ? "3rem" : "1.7rem")};
  color: ${props => props.theme.cores.quatro};
`;
