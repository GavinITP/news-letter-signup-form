import Image from "next/image";

const Home = () => {
  return (
    <div className="grid col-auto max-w-sm bg-white">
      <img src="illustration-sign-up-mobile.svg" />
      <section>
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>

        <label>Email address</label>
        <input placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </section>
    </div>
  );
};

export default Home;
