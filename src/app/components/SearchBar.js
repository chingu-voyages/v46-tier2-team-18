"use client";
import { useState } from "react";

export default function SearchBar() {
  const [searchRecipe, setSearchRecipe] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  //Reset function to reset when typing
  function handleReset() {
    if (searchRecipe !== "") {
      setSearchRecipe("");
    } else {
    }
  }

  return (
    <div className="mx-auto max-w-md my-20 relative flex gap-2">
      <form
        className="relative flex w-full border border-gray-300 rounded-full"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center relative left-0 top-0">
          <button
            className="bg-white  p-2 rounded-full flex-shrink-0 w-10 h-10 flex justify-center text-black items-center cursor-pointer"
            onClick={() => handleReset()}
          >
            {searchRecipe !== "" ? (
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          className="outline-none text-gray-800 w-full pl-4 rounded-r-full"
          placeholder="Search for items..."
        />
      </form>
    </div>
  );
}
