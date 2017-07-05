import { decode } from "json-web-token";

import { AxioDevise, Axio } from "../Axio";

const setAuthToken = (token) => {
  localStorage.setItem("token", token);
  AxioDevise.defaults.headers.common.Authorization = `Bearer ${token}`;
  Axio.defaults.headers.common.Authorization = `Bearer ${token}`;

  return decode(process.env.JWT_SECRET, token).value;
};

const removeAuthToken = () => {
  localStorage.removeItem("token");
  delete AxioDevise.defaults.headers.common.Authorization;
  delete Axio.defaults.headers.common.Authorization;
};

export {
  setAuthToken,
  removeAuthToken,
};
