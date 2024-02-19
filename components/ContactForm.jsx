"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Loading from "./Loading";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (data) => {
    try {
      setLoading(true);
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      };

      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      if (res.status === 200) {
        setSuccess(true);
        reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-sm relative"
      onSubmit={handleSubmit(sendEmail)}
      ref={formRef}
    >
      <label
        htmlFor="name"
        className="block pl-4 text-sm font-medium leading-6 text-gray-900"
      >
        Full Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-full rounded-full border-0 px-4 py-1.5 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6 shadow-zinc-300 shadow-inner mt-1"
        {...register("name", { required: true, maxLength: 100 })}
      />
      {errors.name && (
        <span className="text-red-600 text-sm pl-3">
          Please write your name
        </span>
      )}
      <label
        htmlFor="email"
        className="block pl-4 text-sm font-medium leading-6 text-gray-900 mt-4"
      >
        E-Mail
      </label>
      <input
        type="text"
        name="email"
        id="email"
        className="block w-full rounded-full border-0 px-4 py-1.5 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6 shadow-zinc-300 shadow-inner mt-1"
        {...register("email", {
          required: "Please write your e-mail address",
          maxLength: 100,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid e-mail address",
          },
        })}
      />
      {errors.email && (
        <span className="text-red-600 text-sm pl-3">
          {errors.email.message}
        </span>
      )}
      <label
        htmlFor="message"
        className="block pl-4 text-sm font-medium leading-6 text-gray-900 mt-4"
      >
        Message
      </label>
      <textarea
        type="text"
        name="message"
        id="message"
        className="block w-full min-h-24 rounded-3xl border-0 px-4 py-1.5 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6 shadow-zinc-300 shadow-inner mt-1"
        {...register("message", { required: true, maxLength: 1000 })}
      />
      {errors.message && (
        <span className="text-red-600 text-sm pl-3">
          Please write your message
        </span>
      )}
      <button className="text-md border px-4 py-1 rounded-xl mt-4 items-center flex justify-center w-full bg-zinc-50 text-zinc-700 shadow-md hover:font-semibold hover:bg-zinc-100">
        {loading ? <Loading /> : "Send"}
      </button>
      {error && (
        <span className="absolute text-sm text-red-600 mt-4 w-full text-center">
          Something went wrong, please try again.
        </span>
      )}
      {success && (
        <span className=" absolute text-sm text-green-600 mt-4 w-full text-center">
          Thank you for your message!
        </span>
      )}
    </form>
  );
}
