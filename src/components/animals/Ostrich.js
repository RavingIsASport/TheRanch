import { Link } from "react-router-dom";
import OstrichImg from "../../assets/ostrichs";
export default function Ostrich() {
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
        Ostrichs
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-8">
        <img
          src={OstrichImg.ostrich1}
          alt="Ostrich"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={OstrichImg.ostrich2}
          alt="Ostrich"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={OstrichImg.ostrich3}
          alt="Ostrich"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={OstrichImg.ostrich4}
          alt="Ostrich"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={OstrichImg.ostrich5}
          alt="Ostrich"
          className="h-60 md:h-96 rounded"
        />
      </div>
    </>
  );
}
