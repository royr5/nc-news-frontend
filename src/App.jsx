import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Article from "./components/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
