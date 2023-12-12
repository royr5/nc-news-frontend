import axios from "axios";

const api = axios.create({
  baseURL: "https://news-o60m.onrender.com/api",
});

export const getSingleArticle = (id) => {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getComments = (id) => {
  return api.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};
