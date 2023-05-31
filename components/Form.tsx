"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Valid email required" })
    .trim()
    .min(3)
    .max(30),
});

type Email = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: zodResolver(schema),
  });

  const submitCorrectedData = (data: Email) => {
    console.log("correct", data);
  };

  return (
    <form className="my-12" onSubmit={handleSubmit(submitCorrectedData)}>
      <div className="flex justify-between">
        <label htmlFor="email" className="block mb-2 text-xs font-bold">
          Email address
        </label>

        {errors.email && (
          <p className="text-xs font-bold text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div
        className={`mb-2 px-6 py-4 rounded-lg outline outline-1 ${
          errors.email && "outline-red-500 bg-red-100"
        }`}
      >
        <input
          id="email"
          className={`block w-full focus:outline-none ${
            errors.email && "text-red-500 bg-red-100"
          }`}
          placeholder="email@company.com"
          {...register("email")}
        />
      </div>

      <button
        type="submit"
        className="bg-slate text-white text-center font-bold w-full px-6 py-4 rounded-lg my-4 hover:bg-violet-950"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
