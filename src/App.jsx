import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Article from "./components/Article/Article";
import { UserProvider } from "./contexts/UserContent";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
