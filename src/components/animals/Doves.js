import { Link } from "react-router-dom";
import DoveImg from "../../assets/doves/index";

export default function Dove() {
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
      <h2 className="text-lg md:text-2xl text-center font-sans text-slate-900 my-2">
        Doves
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-[114px] md:pb-56">
        <img src={DoveImg.dove1} alt="Doves" className="md:h-96 rounded" />
        <img src={DoveImg.dove2} alt="Doves" className="md:h-96 rounded" />
        <img src={DoveImg.dove3} alt="Doves" className="md:h-96 rounded" />
      </div>
    </>
  );
}
