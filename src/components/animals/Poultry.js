import { Link } from "react-router-dom";
import PoultryImg from "../../assets/poultry";
export default function Poultry() {
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
        Poultry
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-8">
        <img
          src={PoultryImg.poultry1}
          alt="Poultry"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PoultryImg.poultry2}
          alt="Poultry"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PoultryImg.poultry3}
          alt="Poultry"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PoultryImg.poultry4}
          alt="Poultry"
          className="h-60 md:h-96 rounded"
        />
      </div>
    </>
  );
}
