import { Link } from "react-router-dom";
import PeacockImg from "../../assets/peacocks";

export default function Peacock() {
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
        Peacocks
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-8">
        <img
          src={PeacockImg.peacock1}
          alt="Peacock"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PeacockImg.peacock2}
          alt="Peacock"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PeacockImg.peacock3}
          alt="Peacock"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PeacockImg.peacock4}
          alt="Peacock"
          className="h-60 md:h-96 rounded"
        />
        <img
          src={PeacockImg.peacock5}
          alt="Peacock"
          className="h-60 md:h-96 rounded"
        />
      </div>
    </>
  );
}
