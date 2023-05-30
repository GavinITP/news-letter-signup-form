const Home = () => {
  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[375px]">
      <article className="bg-white rounded-2xl overflow-hidden max-h-screen">
        <img className="w-full" src="illustration-sign-up-mobile.svg" />
        <section className="px-8 text-slate">
          <h1 className="text-[2.5rem] font-bold mt-6">Stay Updated!</h1>
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

          <div className="my-12">
            <label htmlFor="email" className="block mb-2 text-xs font-bold">
              Email address
            </label>
            <div className="mb-2 px-6 py-4 rounded-lg outline outline-1 focus-within:outline-violet-700 focus-within:outline-2">
              <input
                type="email"
                id="email"
                className="block focus:outline-none"
                placeholder="email@company.com"
              />
            </div>
            <button className="bg-slate text-white text-center font-bold w-full px-6 py-4 rounded-lg my-4 hover:bg-violet-950">
              Subscribe to monthly newsletter
            </button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
