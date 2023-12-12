import { Link } from "react-router-dom";
import BunnyPic from "../assets/bunnies/IMG_0115Medium.jpeg";
import DovePic from "../assets/doves/IMG_2165.jpeg";
import DuckPic from "../assets/ducks/IMG_2188.jpeg";
import DwarfPic from "../assets/dwarf goats/IMG_2208.jpeg";
import EmuPic from "../assets/emus/IMG_2179.jpeg";
import OstrichPic from "../assets/ostrichs/IMG_2217.jpeg";
import PeacockPic from "../assets/peacocks/IMG_2198.jpeg";
import PheasantPic from "../assets/pheasant/IMG_2154.jpeg";
import PoultryPic from "../assets/poultry/IMG_2187.jpeg";
import SheepPic from "../assets/sheep/IMG_2205.jpeg";
import TurkeyPic from "../assets/turkeys/IMG_2183.jpeg";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-serif text-center mt-3">
        The Animals
      </h1>
      {/* photos body div */}
      <div className="h-full grid grid-cols-2 md:grid-cols-4">
        {/* Bunnies */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4">
            Lion Head Bunnies
          </h2>
          <div className="flex flex-col items-center">
            <img
              src={BunnyPic}
              alt="Bunny"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/bunnies"
              className="p-1 mt-9 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Bunnies &gt;
            </Link>
          </div>
        </div>
        {/* Doves */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Doves</h2>
          <div className="flex flex-col items-center">
            <img
              src={DovePic}
              alt="Dove"
              className="w-36 md:w-52  p-1 rounded"
            />
            <Link
              to="/gallery/doves"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Doves &gt;
            </Link>
          </div>
        </div>
        {/* Duck */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Ducks</h2>
          <div className="flex flex-col items-center">
            <img
              src={DuckPic}
              alt="Duck"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/ducks"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Duck &gt;
            </Link>
          </div>
        </div>
        {/* Dwarf */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4">Dwarf Goats</h2>
          <div className="flex flex-col items-center">
            <img
              src={DwarfPic}
              alt="Dwarf Goat"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/goats"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Goats &gt;
            </Link>
          </div>
        </div>
        {/* Emus */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50 ">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Emus</h2>
          <div className="flex flex-col items-center">
            <img src={EmuPic} alt="Emu" className="w-36 md:w-52 p-1 rounded" />
            <Link
              to="/gallery/emus"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Emus &gt;
            </Link>
          </div>
        </div>
        {/* Ostrich */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Ostrichs</h2>
          <div className="flex flex-col items-center">
            <img
              src={OstrichPic}
              alt="Ostrich"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/ostrichs"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Ostrichs &gt;
            </Link>
          </div>
        </div>
        {/* Peacocks */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Peacocks</h2>
          <div className="flex flex-col items-center">
            <img
              src={PeacockPic}
              alt="Peacock"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/peacocks"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Peacocks &gt;
            </Link>
          </div>
        </div>
        {/* Pheasants */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Pheasants</h2>
          <div className="flex flex-col items-center">
            <img
              src={PheasantPic}
              alt="Pheasant"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/pheasants"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Pheasants &gt;
            </Link>
          </div>
        </div>
        {/* Poultry */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Poultry</h2>
          <div className="flex flex-col items-center">
            <img
              src={PoultryPic}
              alt="Rooster"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/poultry"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Poultry &gt;
            </Link>
          </div>
        </div>
        {/* Sheep */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Sheeps</h2>
          <div className="flex flex-col items-center">
            <img
              src={SheepPic}
              alt="Sheep"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/sheeps"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Sheeps &gt;
            </Link>
          </div>
        </div>
        {/* Turkey */}
        <div className="m-2 md:m-8 rounded-xl text-center bg-slate-100/50">
          <h2 className="text-xl font-sans text-slate-900 my-4"> Turkeys</h2>
          <div className="flex flex-col items-center">
            <img
              src={TurkeyPic}
              alt="Turkey"
              className="w-36 md:w-52 p-1 rounded"
            />
            <Link
              to="/gallery/turkeys"
              className="p-1 m-1 rounded hover:bg-cyan-200 text-xs md:text-base"
            >
              See More Turkeys &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
