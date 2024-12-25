"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Loading from "../Loading/Loading";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const t = useTranslations("Contact");

  const sendEmail: SubmitHandler<FormValues> = async (data) => {
    try {
      setLoading(true);
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      };

      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      if (res.status === 200) {
        setSuccess(true);
        reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="relative w-4/5 max-w-sm lg:w-full"
      onSubmit={handleSubmit(sendEmail)}
    >
      <label
        htmlFor="name"
        className="block pl-4 text-start text-sm leading-6 font-medium text-gray-900 dark:text-zinc-200"
      >
        {t("name")}
      </label>
      <input
        type="text"
        id="name"
        className="mt-1 block w-full rounded-full border-0 bg-zinc-100 px-4 py-1.5 text-zinc-900 ring-1 shadow-inner shadow-zinc-300 ring-zinc-300 ring-inset focus:ring-2 focus:ring-zinc-400 focus:outline-hidden focus:ring-inset sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-none dark:ring-zinc-500"
        {...register("name", { required: true, maxLength: 100 })}
      />
      {errors.name && (
        <span className="pl-3 text-sm text-red-600">{t("nameError")}</span>
      )}
      <label
        htmlFor="email"
        className="mt-4 block pl-4 text-start text-sm leading-6 font-medium text-gray-900 dark:text-zinc-200"
      >
        {t("email")}
      </label>
      <input
        type="text"
        id="email"
        className="mt-1 block w-full rounded-full border-0 bg-zinc-100 px-4 py-1.5 text-zinc-900 ring-1 shadow-inner shadow-zinc-300 ring-zinc-300 ring-inset focus:ring-2 focus:ring-zinc-400 focus:outline-hidden focus:ring-inset sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-none dark:ring-zinc-500"
        {...register("email", {
          required: t("emailError"),
          maxLength: 100,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: t("validEmail"),
          },
        })}
      />
      {errors.email && (
        <span className="pl-3 text-sm text-red-600">
          {errors.email.message}
        </span>
      )}
      <label
        htmlFor="message"
        className="mt-4 block pl-4 text-start text-sm leading-6 font-medium text-gray-900 dark:text-zinc-200"
      >
        {t("message")}
      </label>
      <textarea
        id="message"
        className="mt-1 block min-h-24 w-full rounded-3xl border-0 bg-zinc-100 px-4 py-1.5 text-zinc-900 ring-1 shadow-inner shadow-zinc-300 ring-zinc-300 ring-inset focus:ring-2 focus:ring-zinc-400 focus:outline-hidden focus:ring-inset sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-none dark:ring-zinc-500"
        {...register("message", { required: true, maxLength: 1000 })}
      />
      {errors.message && (
        <span className="pl-3 text-sm text-red-600">{t("write")}</span>
      )}
      <button className="text-md mt-4 flex w-full cursor-pointer items-center justify-center rounded-xl border bg-zinc-50 px-4 py-1 text-zinc-700 shadow-md transition-all duration-500 hover:bg-zinc-100 hover:font-semibold dark:border-none dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600">
        {loading ? <Loading /> : t("send")}
      </button>
      {error && (
        <span className="absolute mt-4 flex w-full justify-center text-sm text-red-600">
          {t("error")}
        </span>
      )}
      {success && (
        <span className="absolute mt-4 flex w-full justify-center text-center text-sm text-green-600">
          {t("success")}
        </span>
      )}
    </form>
  );
}
