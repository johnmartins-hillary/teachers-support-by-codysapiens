"use client";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 h-[100vh] w-[100vw] items-center justify-center">
      <h1 className="text-[20px] md:text-[50px] uppercase text-gray-500">welcome to teacher support </h1>
      <a
        href="/auth-pages/login"
        className={
          "flex justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 w-70"
        }
      >
        Login to Dashboard
      </a>
    </div>
  );
}
