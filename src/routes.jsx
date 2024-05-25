import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import PageNotFound from "./pages/PageNotFound";
import PageBase from "./pages/PageBase";
import Teste from "./pages/Sobre/tst";
import Aprovar from "./pages/Projetos/aprovar";
import Adm from "./pages/Projetos/adm";
import Dashboard from "./pages/Projetos/dashboard";
import Register from "./pages/Login/register";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/cadastrar" element={<Register />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="/aprovar" element={<Aprovar />}></Route>
          <Route path="/adm" element={<Adm />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
