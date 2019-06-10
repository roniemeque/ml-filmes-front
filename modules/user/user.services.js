import fetch from "isomorphic-unfetch";
import { pegaUser } from "../user/storage";

export const atualizarMedias = async () => {
  const userGuardado = pegaUser();
  if (!userGuardado) {
    return null;
  }

  const response = await fetch(
    `${process.env.API_BASE_URL}/users/${userGuardado.id}/atualiza-medias`,
  );

  const { medias } = await response.json();

  return medias || null;
};

export const pegarRecomendacoes = async user_id => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/users/${user_id}/sugestoes`,
  );

  const { filmes } = await response.json();

  return filmes || null;
};
