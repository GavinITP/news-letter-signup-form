const Form = () => {
  return (
    <form className="my-12">
      <div className="flex justify-between">
        <label htmlFor="email" className="block mb-2 text-xs font-bold">
          Email address
        </label>
        <p className="block mb-2 text-xs font-bold text-red-500">
          Valid Email Required
        </p>
      </div>
      <div className="mb-2 px-6 py-4 rounded-lg outline outline-1 outline-red-500 bg-red-100">
        <input
          type="email"
          id="email"
          className="block w-full focus:outline-none text-red-500 bg-red-100"
          placeholder="email@company.com"
          required
        />
      </div>
      <button className="bg-slate text-white text-center font-bold w-full px-6 py-4 rounded-lg my-4 hover:bg-violet-950">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
