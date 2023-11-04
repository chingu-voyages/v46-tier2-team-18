'use client';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const [searchRecipe, setSearchRecipe] = useState('');
  const [data, setData] = useState([]);

  const url =
    'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  //Reset function to reset when typing
  function handleReset() {
    if (searchRecipe !== '') {
      setSearchRecipe('');
    } else {
    }
  }

  return (
    <>
      <div className="mt-5">
        {data.length > 0 ? ( // Conditionally rendering based on data availability
          <div>
            {data.map(
              (
                recipe,
                index // index needs to be changed to id
              ) => (
                <h1 key={index}>{recipe.display}</h1> // Assuming 'title' exists in your recipe object
              )
            )}
          </div>
        ) : (
          <p>No recipes found</p>
        )}
      </div>
      <div className="relative flex max-w-md gap-2 mx-auto my-20">
        <form
          className="relative flex w-full border border-gray-300 rounded-full"
          onSubmit={handleSubmit}
        >
          <div className="relative top-0 left-0 flex items-center justify-center">
            <button
              className="flex items-center justify-center flex-shrink-0 w-10 h-10 p-2 text-black bg-white rounded-full cursor-pointer"
              onClick={() => handleReset()}
            >
              {searchRecipe !== '' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              )}
            </button>
          </div>
          <input
            value={searchRecipe}
            onChange={(e) => setSearchRecipe(e.target.value)}
            className="w-full pl-4 text-gray-800 rounded-r-full outline-none"
            placeholder="Search for items..."
          />
        </form>
      </div>
    </>
  );
}
