import DoveImg from "../../assets/doves/index";

export default function Dove() {
  return (
    <>
      <h3 className="text-3xl font-sans text-slate-900 my-4">Doves</h3>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={DoveImg.dove1}
          alt="Doves"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={DoveImg.dove2}
          alt="Doves"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={DoveImg.dove3}
          alt="Doves"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
