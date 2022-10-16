import DwarfImg from "../../assets/dwarf goats/index";

export default function Dwarf() {
  return (
    <>
      <h5 className="text-3xl font-sans text-slate-100">Dwarf Goats</h5>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={DwarfImg.dwarf1}
          alt="Dwarf Goat"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={DwarfImg.dwarf2}
          alt="Dwarf Goat"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={DwarfImg.dwarf3}
          alt="Dwarf Goat"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={DwarfImg.dwarf4}
          alt="Dwarf Goat"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
