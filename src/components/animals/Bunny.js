import BunnyImg from "../../assets/bunnies/index";

export default function Bunny() {
  return (
    <>
      <h2 className="text-3xl font-sans text-slate-900 my-4">
        {" "}
        Lion Head Bunnies
      </h2>
      <div className="flex justify-center flex-wrap gap-2">
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
