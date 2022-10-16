import PoultryImg from "../../assets/poultry";
export default function Poultry() {
  return (
    <>
      <h8 className="text-3xl font-sans text-slate-100">Chickens & Roosters</h8>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={PoultryImg.poultry1}
          alt="Poultry"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PoultryImg.poultry2}
          alt="Poultry"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PoultryImg.poultry3}
          alt="Poultry"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PoultryImg.poultry4}
          alt="Poultry"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
