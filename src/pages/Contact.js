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
    <div className="h-screen mx-7 sm:w-1/2 sm:m-auto lg:w-2/6 xl:w-2/6">
      <h1 className="text-center text-2xl mt-3 font-Courgette md:text-3xl lg:text-4xl">
        Contact Us:
      </h1>
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
  );
}
