import TurkeyImg from "../../assets/turkeys";

export default function Turkey() {
  return (
    <>
      <h1 className="text-3xl font-sans text-slate-900 my-4">Turkey</h1>
      <div className="flex justify-center flex-wrap gap-2">
        <img
          src={TurkeyImg.turkey1}
          alt="Turkey"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
        <img
          src={TurkeyImg.turkey2}
          alt="Turkey"
          className="w-36 h-52 md:w-1/6 md:h-4/6 border-2 rounded"
        />
      </div>
    </>
  );
}
