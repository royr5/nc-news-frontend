import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
