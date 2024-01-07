import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonCatch from "./pages/PokemonCatch";
import PokemonCollection from "./pages/PokemonCollection";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/catch/:name" element={<PokemonCatch />} />
        <Route path="/my-collection" element={<PokemonCollection />} />
      </Routes>
    </Layout>
  );
}

export default App;
