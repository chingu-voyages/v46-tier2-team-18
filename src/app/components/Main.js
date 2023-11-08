"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import WelcomeModal from "./WelcomeModal";

export default function Main() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [tag, setTag] = useState([]);
  const [name, setName] = useState("");

  const url =
    "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=chicken%20soup";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TASTY_API_KEY,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.results);
        // Set the imageUrl state to the thumbnail_url of the first recipe
        if (response.results && response.results.length > 0) {
          setImageUrl(response.results[0].thumbnail_url);
          // Check if tags are available and set the first one, otherwise set an empty array
          setTag(
            response.results[0].tags && response.results[0].tags.length > 0
              ? response.results[0].tags[0].display_name
              : []
          );
          setName(response.results[0].name);
        }
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
    if (searchRecipe !== "") {
      setSearchRecipe("");
    } else {
    }
  }
  return (
    <div>
      <WelcomeModal />
      <br />
      {console.log(data)}
      <SearchBar
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        searchRecipe={searchRecipe}
      />
      <div className="flex flex-wrap justify-center mb-12 ">
        <Card data={data} imageUrl={imageUrl} tag={tag} name={name} />
      </div>
    </div>
  );
}
