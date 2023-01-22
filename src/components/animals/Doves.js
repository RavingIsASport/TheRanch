import { Link } from "react-router-dom";
import DoveImg from "../../assets/doves/index";

export default function Dove() {
  return (
    <>
      <div className="grid justify-items-stretc py-2">
        <Link
          to="/gallery"
          className="ml-3 bg-slate-50 justify-self-start rounded-md text-sm p-1"
        >
          ⌫ Back
        </Link>
        <h2 className="text-xl justify-self-center font-sans text-slate-900">
          Doves
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-4 h-screen">
        <img
          src={DoveImg.dove1}
          alt="Doves"
          className="w-36 h-52 md:w-1/6 md:h-3/6 border-2 rounded"
        />
        <img
          src={DoveImg.dove2}
          alt="Doves"
          className="w-36 h-52 md:w-1/6 md:h-3/6 border-2 rounded"
        />
        <img
          src={DoveImg.dove3}
          alt="Doves"
          className="w-36 h-52 md:w-1/6 md:h-3/6 border-2 rounded"
        />
      </div>
    </>
  );
}
