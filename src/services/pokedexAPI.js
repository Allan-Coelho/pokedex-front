import axios from "axios";
import UserContext from "../contexts/UserContext.js";
import { useContext } from "react";

const ENDPOINT_URL = "http://localhost:5000";

function UserToken() {
  const { user } = useContext(UserContext);

  return user.token;
}

function postSignUp(body) {
  return axios.post(`${ENDPOINT_URL}/authentication/sign-up`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function postSignIn(body) {
  return axios.post(`${ENDPOINT_URL}/authentication/sign-in`, body);
}

function postPoketeam(body) {
  const token = UserToken();

  return axios.post(`${ENDPOINT_URL}/poketeams`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function getPoketeam(token) {
  return axios.get(`${ENDPOINT_URL}/poketeams`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function deletePoketeam({ title }) {
  const token = UserToken();

  return axios.delete(`${ENDPOINT_URL}/poketeams/${title}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function postPokemon(body) {
  const token = UserToken();

  return axios.post(`${ENDPOINT_URL}/pokemon`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const services = {
  postSignUp,
  postSignIn,
  postPoketeam,
  getPoketeam,
  deletePoketeam,
  postPokemon,
};

export default services;
