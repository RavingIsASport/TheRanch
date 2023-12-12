import { Link } from "react-router-dom";
import image from "../assets/Ranch.jpg";
import goatImg from "../assets/dwarf goats/IMG_2208.jpeg";

export default function Home() {
  return (
    <>
      <div
        className="h-full bg-cover bg-center md:bg-bottom"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* hero image */}
        <div className="w-full h-full py-10 bg-slate-800/50">
          <h1 className="text-5xl text-center my-10 md:text-8xl text-third  font-Lora">
            <span className="text-xl md:text-2xl">Welcome To</span> <br />
            Mariposas Ranch
          </h1>

          <div className="text-center mt-14 py-16">
            <p className="text-slate-200 text-base my-4 font-RobotoSlab font-extrabold md:text-xl">
              Discover Quality Animals for Your Farm and Lifestyle
            </p>
            <Link
              to="/ranch"
              className="text-third bg-gradient-to-b from-first to-second hover:bg-gradient-to-b hover:from-second hover:to-third hover:text-fifth font-RobotoSlab text-xs p-2 rounded-full md:text-lg"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="pt-24 pb-20 px-8 grid gap-2 bg-gradient-to-tr from-second md:px-24 md:gap-0 ">
        <p className="font-black text-4xl text-first font-RobotoSlab mb-5">
          <span className="text-base font-normal text-black">At</span> Mariposas
          Ranch,
        </p>
        <p className="font-Lora leading-8 md:w-1/2 md:text-xl">
          we take pride in providing premium animals bred and raised in the
          heart of our picturesque ranch. Our commitment to quality and ethical
          farming practices ensures that you'll find the perfect addition to
          your farm or lifestyle.
        </p>
        <img
          src={`${goatImg}`}
          className="w-48 rounded justify-self-end shadow-2xl md:w-1/3"
          alt="Nigerian Dwarf Goat"
        />
      </div>
      {/* third section */}
      <div className="px-8 py-14 grid justify-items-center gap-8 text-fifth bg-third">
        <h2 className="text-3xl font-RobotoSlab ">
          Why Choose Mariposas Ranch?
        </h2>

        <li className="font-Lora md:text-xl">
          Heritage Breeds: Explore a diverse selection of heritage breeds known
          for their hardiness and exceptional characteristics.
        </li>
        <li className="font-Lora text-xl">
          Pasture-Raised Excellence: Our animals roam freely in our expansive
          pastures, resulting in healthier and happier livestock.
        </li>
        <li className="font-Lora text-xl">
          Knowledgeable Staff: Our experienced staff is here to assist you in
          finding the ideal animals that suit your needs and preferences.
        </li>
        <li className="font-Lora text-xl">
          Ethical Farming: We prioritize ethical and sustainable farming
          practices, ensuring the well-being of our animals and the environment.
        </li>
      </div>
    </>
  );
}
