import api from "./api";

async function login(user) {
  const response = await api.apiBase.post("/authentication/", user);

  return response.data;
}

async function register(user) {
  const response = await api.apiBase.post("/users/", user);

  return response.data;
}

const authenticationApi = {
  register,
  login,
};

export default authenticationApi;
