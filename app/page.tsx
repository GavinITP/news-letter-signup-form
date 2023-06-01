"use client";

import Form from "@/components/Form";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const NavigateToSuccessPage = () => {
    router.push("/success");
  };

  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full min-[400px]:max-w-[375px] min-[860px]:max-w-[1000px] 2xl:scale-125 shadow-2xl">
      <article className="bg-white sm:rounded-2xl min-[860px]:rounded-3xl overflow-hidden min-h-screen sm:min-h-min grid min-[860px]:grid-cols-2 min-[860px]:p-8 min-[860px]:gap-4">
        <picture className="min-[860px]:order-1">
          <source
            media="(min-width: 860px)"
            srcSet="illustration-sign-up-desktop.svg"
            className="rounded-2xl"
          />
          <img
            className="w-full"
            src="illustration-sign-up-mobile.svg"
            alt="background"
          />
        </picture>
        <section className="px-8 text-slate min-[860px]:px-10 min-[860px]:my-auto">
          <h1 className="text-[2.5rem] min-[860px]:text-[2.8rem] lg:text-[3.2rem] font-bold mt-6">
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
