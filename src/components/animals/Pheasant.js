import { Link } from "react-router-dom";
import PheasantImg from "../../assets/pheasant";

export default function Pheasant() {
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
        Pheasants
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-8">
        <img
          src={PheasantImg.pheasant1}
          alt="Pheasant"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PheasantImg.pheasant2}
          alt="Pheasant"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PheasantImg.pheasant3}
          alt="Pheasant"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PheasantImg.pheasant4}
          alt="Pheasant"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PheasantImg.pheasant5}
          alt="Pheasant"
          className="w-60 md:w-96 rounded"
        />
        <img
          src={PheasantImg.pheasant6}
          alt="Pheasant"
          className="w-60 md:w-96 rounded"
        />
      </div>
    </>
  );
}
