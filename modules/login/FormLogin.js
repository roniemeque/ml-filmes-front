import { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import { ButtonBlock } from "../ui/Buttons";
import { InputStyled } from "../ui/Inputs";
import { guardaUser } from "../user/storage";
import { criaOuBuscaUser } from "./login.services";

const FormLoginStyled = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  min-width: 30rem;
`;

const EmailInput = styled(InputStyled)`
  font-size: 1.8rem;
  margin: 0;
`;

function FormLogin() {
  const [email, setEmail] = useState("");

  const fazLogin = async e => {
    e.preventDefault();

    const user = await criaOuBuscaUser(email);

    guardaUser(user);

    Router.push("/setup");
  };

  return (
    <FormLoginStyled onSubmit={fazLogin}>
      <EmailInput
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <ButtonBlock>Entrar</ButtonBlock>
    </FormLoginStyled>
  );
}

export default FormLogin;
