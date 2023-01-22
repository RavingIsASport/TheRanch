import { Link } from "react-router-dom";
import BunnyImg from "../../assets/bunnies/index";

export default function Bunny() {
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
          Lion Head Bunnies
        </h2>
      </div>
      <div className="flex justify-center flex-wrap pb-4">
        <img
          src={BunnyImg.bunny5}
          alt="Bunny"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={BunnyImg.bunny2}
          alt="Bunny"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={BunnyImg.bunny3}
          alt="Bunny"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={BunnyImg.bunny4}
          alt="Bunny"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={BunnyImg.bunny1}
          alt="Bunny"
          className="w-6/12 md:w-1/6 border-2 rounded"
        />
      </div>
    </>
  );
}
