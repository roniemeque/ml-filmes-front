export const guardaUser = user => {
  localStorage.setItem("filmes_ml_user", JSON.stringify(user));
};

export const pegaUser = () => {
  const userStringfied = localStorage.getItem("filmes_ml_user");
  return userStringfied ? JSON.parse(userStringfied) : null;
};
