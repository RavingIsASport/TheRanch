import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1hykhc",
        "template_lj6n10e",
        form.current,
        "zzAdvoPoJUmaothS3"
      )
      .then(
        (result) => {
          alert("Email Sent. We'll be in contact soon.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h1 className="text-center text-xl mt-3 font-Courgette md:text-2xl lg:text-4xl">
        Follow us:
      </h1>
      <div className="flex justify-center my-3">
        <a href="https://www.tiktok.com/@mariposasranch?is_from_webapp=1&sender_device=pc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-20"
          >
            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
          </svg>
        </a>
      </div>
      <div className="h-screen mx-7 sm:w-1/2 sm:m-auto lg:w-2/6 xl:w-2/6">
        <p className="text-center font-Courgette text-xl md:text-2xl">
          Contact us:
        </p>
        <form
          className="bg-slate-50/60 p-6 mt-4 mx-2 rounded grid grid-cols-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <span className="col-start-1 col-span-6 text-sm">Name:</span>
          <input
            className="col-start-1 col-span-6 bg-transparent border-b-2 border-slate-700 focus:outline-none text-base"
            name="from_name"
            type="text"
          />
          <span className="col-start-1 col-span-6 text-sm mt-3">Email:</span>
          <input
            className="col-start-1 col-span-6 bg-transparent border-b-2 border-slate-700 focus:outline-none text-base"
            type="email"
            name="user_email"
          />
          <span className="col-start-1 col-span-6 text-sm mt-3">Phone:</span>
          <input
            className="col-start-1 col-span-6 bg-transparent border-b-2 border-slate-700 focus:outline-none text-base"
            type="text"
            name="user_phone"
          />
          <span className="col-start-1 col-span-4 text-sm mt-3">Message:</span>
          <textarea
            className="col-start-1 col-span-6 rounded p-1 bg-transparent border-2 border-slate-700 resize-none h-20 focus:outline-none text-md"
            name="message"
          />
          <button
            className="bg-emerald-500 mt-5 col-span-2 rounded text-sm sm:col-span-1 sm:p-1 hover:bg-emerald-700 hover:text-slate-200"
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
