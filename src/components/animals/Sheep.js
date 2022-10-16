import SheepImg from "../../assets/sheep";

export default function Sheep() {
  return (
    <>
      <h8 className="text-3xl font-sans text-slate-100">Sheep</h8>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={SheepImg.sheep1}
          alt="Sheep"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={SheepImg.sheep2}
          alt="Sheep"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={SheepImg.sheep3}
          alt="Sheep"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={SheepImg.sheep4}
          alt="Sheep"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
