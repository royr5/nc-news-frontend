import axios from "axios";

const api = axios.create({
  baseURL: "https://news-o60m.onrender.com/api",
});

export const getSingleArticle = (id) => {
  return api
    .get(`/articles/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getArticles = (sort_by = "created_at", order = "DESC") => {
  return api
    .get(`/articles?sort_by=${sort_by}&order=${order}`)
    .then((res) => {
      console.log(res);
      return data;
    })
    .catch((err) => {
      throw err;
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

export const getArticlesByTopic = (
  topic,
  sort_by = "created_at",
  order = "DESC"
) => {
  return api
    .get(`/articles?topic=${topic}&sort_by=${sort_by}&order=${order}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

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
    });
};

export const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data;
  });
};
