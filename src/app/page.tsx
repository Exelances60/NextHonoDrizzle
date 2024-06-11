"use client";
import { formSubmit } from "@/actions/formSubmit";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  status: 0,
};
const Home = () => {
  const [formState, action] = useFormState(formSubmit, initialState);
  const { pending } = useFormStatus();
  return (
    <div className="bg-gray-200 w-full h-screen flex flex-col justify-center items-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-2"
        action={action}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Enter your age"
          name="age"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={pending}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
