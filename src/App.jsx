import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import { UserProvider } from "./contexts/UserContent";
import Topics from "./components/Topics/Topics";
import TopicsArticles from "./components/TopicsArticles/TopicsArticles";
import Users from "./components/Users/Users";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article" element={<Article />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic" element={<TopicsArticles />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
