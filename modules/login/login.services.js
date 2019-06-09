import fetch from "isomorphic-unfetch";

export const criaOuBuscaUser = async email => {
  const response = await fetch(`${process.env.API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  const { user } = await response.json();

  return user || null;
};
