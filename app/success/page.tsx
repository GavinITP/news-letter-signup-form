"use client";

import { useRouter } from "next/navigation";

import { useContext } from "react";
import { EmailContext } from "../../components/EmailContext";

const Success = () => {
  const { email } = useContext<any>(EmailContext);

  const router = useRouter();
  const navigateToHomePage = () => {
    router.push("/");
  };

  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <article className="bg-white sm:rounded-2xl md:rounded-3xl min-h-screen sm:min-h-min sm:h-[480px] sm:w-[480px] shadow-2xl px-6 sm:p-10">
        <div className="min-h-screen sm:min-h-full flex flex-col justify-around sm:justify-between">
          <div>
            <img className="mb-10" src="icon-success.svg" />

            <h1 className="text-4xl font-bold mb-6 sm:text-[3.25rem] leading-none">
              Thanks for subscribing!
            </h1>
            <p>
              a confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
          </div>

          <button
            onClick={navigateToHomePage}
            type="submit"
            className="bg-slate text-white text-center font-bold w-full px-6 py-4 rounded-lg my-4 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-xl"
          >
            Dismiss message
          </button>
        </div>
      </article>
    </main>
  );
};

export default Success;
