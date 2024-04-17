"use client";
import Link from "next/link"

export default function Home() {
  return (

<section
  className="relative z-10 bg-['rgba(255, 255, 255, 0.25)']  text-gray-700 "
>
  <div
    className="absolute inset-0 bg-cover opacity-[0.45] bg-[url(https://images6.fanpop.com/image/photos/36800000/School-image-school-36812026-3888-2592.jpg)] bg-cover bg-center bg-no-repeat"
  >
  </div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Welcome to

        <strong className="block font-extrabold text-purple-700"> Teachers Support Tool </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-bold text-lg">
        A tool that helps teachers accross the world to create online lessons, help students and improve on themselves.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          href="/auth-pages/login"
          className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
        >
          Log in
        </Link>

        <Link
          href="/auth-pages/create-account"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
        >
          Sign up
        </Link>
      </div>
    </div>
  </div>
</section>
  );
}
