
import axios from "axios";
const AxioDevise = axios.create({
  baseURL: "/api",
});

const Axio = axios.create({
  baseURL: "/api/v1",
});

export {
  AxioDevise,
  Axio,
};
