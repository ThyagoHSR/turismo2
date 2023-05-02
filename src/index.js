import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={''}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="cadastro" element={<Cadastro/>} />
        <Route path="home" element={<Home/>} />

      </Route>
    </Routes>
  </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);