"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiRefresh } from "react-icons/hi";

export default function Searchbar() {
  const [searchRecipe, setSearchRecipe] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  const clearSearchRecipe = () => {
    setSearchRecipe("");
  };
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
        <button className="bg-gray-700 p-2 rounded-full flex-shrink-0 w-10 h-10 flex justify-center text-white items-center cursor-pointer">
          <AiOutlineSearch className="text-center text-xl" />
        </button>
      </form>
      <button
        onClick={clearSearchRecipe}
        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white flex-shrink-0 rounded-lg cursor-pointer"
      >
        <HiRefresh className="text-xl" />
      </button>
    </div>
  );
}
