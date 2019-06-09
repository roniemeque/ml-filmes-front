import styled from "styled-components";
import devices from "../styles/devices";

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputStyled = styled.input`
  padding: 0.5rem 2rem;
  background-color: ${props => props.theme.lightGrey};
  border-radius: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  min-height: 4rem;
  margin: 0.5rem 0.5rem;
  flex: 1;
`;

export const SelectStyled = styled(InputStyled)`
  height: 4rem;
  max-width: ${props => (props.pequeno ? "24%" : "100%")};
  position: relative;
  @media ${devices.mobileM} {
    max-width: ${props => (props.pequeno ? "30%" : "100%")};
  }
`;
