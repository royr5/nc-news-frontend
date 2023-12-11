import axios from "axios";

const api = axios.create({
  baseURL: "https://news-o60m.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getComments = (id) => {
  return api.get(`/article/${id}/comments`).then(({ data }) => {
    return data;
  });
};
