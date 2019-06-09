import styled from "styled-components";
import { Titulo2 } from "../modules/ui/Tipografia";
import FormLogin from "../modules/login/FormLogin";

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Comecar = styled(Titulo2)`
  margin-top: 8rem;
`;

function Login() {
  return (
    <LoginStyled>
      <Comecar>Vamos começar</Comecar>
      <FormLogin />
    </LoginStyled>
  );
}

export default Login;
