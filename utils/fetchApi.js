import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "7004dad4f4mshbe3e56ad8448252p1e87e2jsn2356655d417f",
    },
  });
  return data;
};
