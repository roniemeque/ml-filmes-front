import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.cores.dois};
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
  margin: 1.4rem 0.5rem 0.5rem;
  transition: all 0.2s;
  padding: 0.6rem 2rem;
  align-self: center;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    transform: translateY(0);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: white;
  color: ${props => props.theme.cores.quatro};
`;
