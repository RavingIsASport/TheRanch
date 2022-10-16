import Bunny from "../components/animals/Bunny";
import Dove from "../components/animals/Doves";
import Ducks from "../components/animals/Ducks";
import Dwarf from "../components/animals/Dwarf";
import Emus from "../components/animals/Emus";
import Ostrich from "../components/animals/Ostrich";
import Peacock from "../components/animals/Peacock";
import Pheasant from "../components/animals/Pheasant";
import Poultry from "../components/animals/Poultry";
import Sheep from "../components/animals/Sheep";
import Turkey from "../components/animals/Turkey";

export default function Gallery() {
  return (
    <>
      <div className="h-full md:h-full flex flex-col">
        <h1 className="text-3xl font-serif self-center mt-3">The Animals</h1>
        {/* photos body div */}
        <div className="my-2 ml-2">
          <Bunny />
          <Dove />
          <Ducks />
          <Dwarf />
          <Emus />
          <Ostrich />
          <Peacock />
          <Pheasant />
          <Poultry />
          <Sheep />
          <Turkey />
        </div>
      </div>
    </>
  );
}
