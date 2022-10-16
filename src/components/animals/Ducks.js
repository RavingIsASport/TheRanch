import DuckImg from "../../assets/ducks/index";

export default function () {
  return (
    <>
      <h4 className="text-3xl font-sans text-slate-900 my-4">Ducks</h4>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={DuckImg.duck1}
          alt="Duck"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={DuckImg.duck2}
          alt="Duck"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
