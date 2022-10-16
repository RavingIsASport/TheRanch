import EmusImg from "../../assets/emus";

export default function Emus() {
  return (
    <>
      <h6 className="text-3xl font-sans text-slate-100">Emus</h6>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={EmusImg.emus1}
          alt="Emu"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={EmusImg.emus2}
          alt="Emu"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={EmusImg.emus3}
          alt="Emu"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={EmusImg.emus4}
          alt="Emu"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
