"use client";

const Success = () => {
  const email = "xxxxxx444444@gmail.com";

  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full sm:max-w-[375px] md:max-w-[1000px] 2xl:scale-125 shadow-2xl">
      <article className="bg-white sm:rounded-2xl md:rounded-3xl">
        <img src="icon-success.svg" />

        <h1>Thanks for subscribing!</h1>
        <p>
          a confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscription.
        </p>

        <button
          onClick={navigateToHomePage}
          type="submit"
          className="bg-slate text-white text-center font-bold w-full px-6 py-4 rounded-lg my-4 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-xl"
        >
          Dismiss message
        </button>
      </article>
    </main>
  );
};

export default Success;
