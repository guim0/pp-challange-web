import axios, { AxiosResponse, AxiosError } from "axios";

export const getAgents = async (res: AxiosResponse) => {
  await axios.get("https://pp-api-desafio.herokuapp.com/agents").then((res) => {
    res.data;
  });
   
};
