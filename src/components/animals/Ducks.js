import { Link } from "react-router-dom";
import DuckImg from "../../assets/ducks/index";

export default function Ducks() {
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
        Ducks
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-2 px-2 pb-8 md:pb-56">
        <img src={DuckImg.duck1} alt="Duck" className="h-60 md:h-96 rounded" />
        <img src={DuckImg.duck2} alt="Duck" className="h-60 md:h-96 rounded" />
      </div>
    </>
  );
}
