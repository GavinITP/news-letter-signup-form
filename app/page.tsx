"use client";

import Form from "@/components/Form";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const NavigateToSuccessPage = () => {
    router.push("/success");
  };

  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full sm:max-w-[375px] md:max-w-[1000px] 2xl:scale-125 shadow-2xl">
      <article className="bg-white sm:rounded-2xl md:rounded-3xl overflow-hidden max-h-screen grid md:grid-cols-2 md:p-8 md:gap-8">
        <img
          className="w-full md:h-full object-cover md:rounded-2xl md:order-1"
          src="illustration-sign-up-mobile.svg"
        />
        <section className="px-8 text-slate md:px-10">
          <h1 className="text-[2.5rem] md:text-[2.8rem] lg:text-[3.4rem] font-bold mt-6">
            Stay Updated!
          </h1>
          <p className="my-4 text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul>
            <li className="my-2 flex flex-row items-between">
              <div className="pr-4">
                <img className="inline" src="icon-list.svg" />
              </div>
              <span>Product discovery and building what matters</span>
            </li>
            <li className="my-2 flex flex-row items-between">
              <div className="pr-4">
                <img className="inline" src="icon-list.svg" />
              </div>
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className="my-2 flex flex-row items-between">
              <div className="pr-4">
                <img className="inline" src="icon-list.svg" />
              </div>
              <span>And much more!</span>
            </li>
          </ul>
          <Form submitDataFunc={NavigateToSuccessPage} />
        </section>
      </article>
    </main>
  );
};

export default Home;
