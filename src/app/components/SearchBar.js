"use client";
import { useState } from "react";

export default function SearchBar() {
  const [searchRecipe, setSearchRecipe] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="mx-auto max-w-md my-20 relative flex gap-2">
      <form
        className="relative flex w-full border border-gray-300 rounded-full"
        onSubmit={handleSubmit}
      >
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          className="outline-none text-gray-800 w-full pl-5 rounded-l-full"
          placeholder="Search for items..."
        />
        <button className="bg-white  p-2 rounded-full flex-shrink-0 w-10 h-10 flex justify-center text-black items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
