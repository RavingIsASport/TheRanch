import { Link } from "react-router-dom";
import BunnyImg from "../../assets/bunnies/index";

export default function Bunny() {
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
        Lion Head Bunnies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-2 px-2 pb-2">
        <img src={BunnyImg.bunny5} alt="Bunny" className="md:h-96 rounded" />
        <img src={BunnyImg.bunny2} alt="Bunny" className="md:h-96 rounded" />
        <img src={BunnyImg.bunny3} alt="Bunny" className="md:h-96 rounded" />
        <img src={BunnyImg.bunny4} alt="Bunny" className="md:h-96 rounded" />
        <img
          src={BunnyImg.bunny1}
          alt="Bunny"
          className="md:w-96 self-center rounded "
        />
      </div>
    </>
  );
}
