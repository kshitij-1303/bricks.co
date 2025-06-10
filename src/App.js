import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import CementAndConcrete from "./pages/categories/cement-and-concrete";
import BricksAndBlocks from "./pages/categories/bricks-and-blocks";
import ElectricalEquipment from "./pages/categories/electrical-equipment";
import SandAndAggregates from "./pages/categories/sand-and-aggregates";
import SteelAndMetals from "./pages/categories/steel-and-metals";
import PaintsAndTools from "./pages/categories/paints-and-tools";
import TilesAndFlooring from "./pages/categories/tiles-and-flooring";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Categories />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/categories/cement-and-concrete"
          element={<CementAndConcrete />}
        />
        <Route
          path="/categories/bricks-and-blocks"
          element={<BricksAndBlocks />}
        />
        <Route
          path="/categories/electrical-equipment"
          element={<ElectricalEquipment />}
        />
        <Route
          path="/categories/tiles-and-flooring"
          element={<TilesAndFlooring />}
        />
        <Route
          path="/categories/paints-and-tools"
          element={<PaintsAndTools />}
        />
        <Route
          path="/categories/sand-and-aggregates"
          element={<SandAndAggregates />}
        />
        <Route
          path="/categories/steel-and-metals"
          element={<SteelAndMetals />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
