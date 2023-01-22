import image from "./assets/Ranch.jpg";
import Navbar from "./components/Navbar";
import Ranch from "./pages/Ranch";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Bunny from "./components/animals/Bunny";
import Doves from "./components/animals/Doves";
import Duck from "./components/animals/Ducks";
import Dwarf from "./components/animals/Dwarf";
import Emus from "./components/animals/Emus";
import Ostrich from "./components/animals/Ostrich";
import Peacock from "./components/animals/Peacock";
import Pheasant from "./components/animals/Pheasant";
import Poultry from "./components/animals/Poultry";
import Sheep from "./components/animals/Sheep";
import Turkey from "./components/animals/Turkey";

import { Route, Routes } from "react-router-dom";
import Ducks from "./components/animals/Ducks";

function App() {
  return (
    <div
      className="m-0 grayscale-[45%]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="h-full">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ranch" element={<Ranch />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* animal routes */}
          <Route path="/gallery/bunnies" element={<Bunny />} />
          <Route path="/gallery/doves" element={<Doves />} />
          <Route path="/gallery/ducks" element={<Ducks />} />
          <Route path="/gallery/dwarfs" element={<Dwarf />} />
          <Route path="/gallery/emus" element={<Emus />} />
          <Route path="/gallery/ostrichs" element={<Ostrich />} />
          <Route path="/gallery/peacocks" element={<Peacock />} />
          <Route path="/gallery/pheasants" element={<Pheasant />} />
          <Route path="/gallery/poultry" element={<Poultry />} />
          <Route path="/gallery/sheeps" element={<Sheep />} />
          <Route path="/gallery/turkeys" element={<Turkey />} />
          {/* end og animal routes */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
