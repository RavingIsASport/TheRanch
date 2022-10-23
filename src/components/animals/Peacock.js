import PeacockImg from "../../assets/peacocks";

export default function Peacock() {
  return (
    <>
      <h1 className="text-3xl font-sans text-slate-900 my-4">Peacock</h1>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={PeacockImg.peacock1}
          alt="Peacock"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PeacockImg.peacock2}
          alt="Peacock"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PeacockImg.peacock3}
          alt="Peacock"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PeacockImg.peacock4}
          alt="Peacock"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={PeacockImg.peacock5}
          alt="Peacock"
          className="h-52 md:w-1/6 border-2 rounded"
        />
      </div>
    </>
  );
}
