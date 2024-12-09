'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Loading from '../Loading/Loading';

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
  const t = useTranslations('Contact');

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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
      className="w-full max-w-sm relative"
      onSubmit={handleSubmit(sendEmail)}
    >
      <label
        htmlFor="name"
        className="block pl-4 text-sm font-medium leading-6 text-gray-900 dark:text-zinc-200 text-start"
      >
        {t('name')}
      </label>
      <input
        type="text"
        id="name"
        className="block w-full rounded-full border-0 px-4 py-1.5 text-zinc-900 dark:text-zinc-200 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-500 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6 shadow-zinc-300 shadow-inner mt-1"
        {...register('name', { required: true, maxLength: 100 })}
      />
      {errors.name && (
        <span className="text-red-600 text-sm pl-3">{t('nameError')}</span>
      )}
      <label
        htmlFor="email"
        className="block pl-4 text-sm font-medium leading-6 text-gray-900 dark:text-zinc-200 text-start mt-4"
      >
        {t('email')}
      </label>
      <input
        type="text"
        id="email"
        className="block w-full rounded-full border-0 px-4 py-1.5 text-zinc-900 dark:text-zinc-200 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-500 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6 shadow-zinc-300 shadow-inner mt-1"
        {...register('email', {
          required: t('emailError'),
          maxLength: 100,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: t('validEmail'),
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
        className="block pl-4 text-sm font-medium leading-6 text-gray-900 mt-4 dark:text-zinc-200 text-start"
      >
        {t('message')}
      </label>
      <textarea
        id="message"
        className="block w-full min-h-24 rounded-3xl border-0 px-4 py-1.5 text-zinc-900 dark:text-zinc-200 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-500 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-400 sm:text-sm sm:leading-6 shadow-zinc-300 shadow-inner mt-1"
        {...register('message', { required: true, maxLength: 1000 })}
      />
      {errors.message && (
        <span className="text-red-600 text-sm pl-3">{t('write')}</span>
      )}
      <button className="text-md border px-4 py-1 rounded-xl mt-4 items-center flex justify-center w-full bg-zinc-50 dark:bg-zinc-700 dark:border-none text-zinc-700 dark:text-zinc-200 shadow-md hover:font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-600">
        {loading ? <Loading /> : t('send')}
      </button>
      {error && (
        <span className="absolute text-sm text-red-600 mt-4 w-full justify-center flex">
          {t('error')}
        </span>
      )}
      {success && (
        <span className=" absolute text-sm text-green-600 mt-4 w-full text-center justify-center flex">
          {t('success')}
        </span>
      )}
    </form>
  );
}
