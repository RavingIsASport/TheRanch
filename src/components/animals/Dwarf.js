import { Link } from "react-router-dom";
import DwarfImg from "../../assets/dwarf goats/index";

export default function Dwarf() {
  return (
    <>
      <div className="pt-3">
        <Link
          to="/gallery"
          className="ml-3 bg-slate-50 rounded-md text-sm p-1 hover:bg-slate-300"
        >
          ⌫ Back
        </Link>
      </div>
      <h4 className="text-lg md:text-2xl text-center font-sans text-slate-900 my-2">
        Nigerian Dwarf Goats
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-32 md:pb-10">
        <img
          src={DwarfImg.dwarf1}
          alt="Dwarf Goat"
          className="md:h-96 rounded"
        />
        <img
          src={DwarfImg.dwarf2}
          alt="Dwarf Goat"
          className="md:h-96 rounded"
        />
        <img
          src={DwarfImg.dwarf3}
          alt="Dwarf Goat"
          className="md:h-96 rounded"
        />
        <img
          src={DwarfImg.dwarf4}
          alt="Dwarf Goat"
          className="md:h-96 rounded"
        />
      </div>
    </>
  );
}
