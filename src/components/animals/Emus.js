import { Link } from "react-router-dom";
import EmusImg from "../../assets/emus";

export default function Emus() {
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
        Emus
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-20">
        <img src={EmusImg.emus1} alt="Emu" className="h-60 md:h-96 rounded" />
        <img src={EmusImg.emus2} alt="Emu" className="h-60 md:h-96 rounded" />
        <img src={EmusImg.emus3} alt="Emu" className="h-60 md:h-96 rounded" />
        <img src={EmusImg.emus4} alt="Emu" className="h-60 md:h-96 rounded" />
      </div>
    </>
  );
}
