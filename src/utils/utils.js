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

export const patchArticle = (id, vote) => {
  return api.patch(`/articles/${id}`, { inc_votes: vote }).then(({ data }) => {
    return data;
  });
};

export const getComments = (id) => {
  return api.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};


export const getTopics = () => {
  return api.get("/topics").then(({ data }) => {
    return data;
  });
};

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data;
  });

export const deleteComment = (id) => {
  return api.delete(`/comments/${id}`).then((res) => {
    console.log(res);
  });
};

export const postComment = (id, body, username) => {
  return api
    .post(`/articles/${id}/comments`, { body, username })
    .then(({ data }) => {
      return data;

};
