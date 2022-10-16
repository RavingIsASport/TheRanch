import PheasantImg from "../../assets/pheasant";

export default function Pheasant() {
  return (
    <>
      <h1 className="text-3xl font-sans text-slate-900 my-4">Pheasant</h1>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={PheasantImg.pheasant1}
          alt="Pheasant"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PheasantImg.pheasant2}
          alt="Pheasant"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PheasantImg.pheasant3}
          alt="Pheasant"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PheasantImg.pheasant4}
          alt="Pheasant"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PheasantImg.pheasant5}
          alt="Pheasant"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PheasantImg.pheasant6}
          alt="Pheasant"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
