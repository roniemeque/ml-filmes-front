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
