import fetch from "isomorphic-unfetch";
import { pegaUser } from "../user/storage";

export const salvarAvaliacao = async ({ id: filme_tmdb_id, nota }) => {
  const userGuardado = pegaUser();
  if (!userGuardado) {
    return null;
  }

  const response = await fetch(`${process.env.API_BASE_URL}/avaliar`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filme_tmdb_id,
      nota,
      user_id: userGuardado.id,
    }),
  });

  const { nota: notaSalva } = await response.json();

  return notaSalva || null;
};
