import OstrichImg from "../../assets/ostrichs";
export default function Ostrich() {
  return (
    <>
      <h1 className="text-3xl font-sans text-slate-900 my-4">Ostrich</h1>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={OstrichImg.ostrich1}
          alt="Ostrich"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={OstrichImg.ostrich2}
          alt="Ostrich"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={OstrichImg.ostrich3}
          alt="Ostrich"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={OstrichImg.ostrich4}
          alt="Ostrich"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={OstrichImg.ostrich5}
          alt="Ostrich"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
