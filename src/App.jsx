import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import Topics from "./components/Topics/Topics";
import TopicsArticles from "./components/TopicsArticles/TopicsArticles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article" element={<Article />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<TopicsArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
