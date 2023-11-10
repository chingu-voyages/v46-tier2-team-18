"use client";
import SearchBar from "./SearchBar";
import Card from "./Card";
import { useState, useEffect } from "react";
import WelcomeModal from "./WelcomeModal";

export default function Main() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [paginationNumbers, setpaginationNumbers] = useState([]);
  const itemsPerPage = 5;
  const url = "https://tasty.p.rapidapi.com/recipes/list";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageNumber]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function setPaginationNumbers(response) {
    let arr = [];
    if (response > 0) {
      for (let i = 1; i <= response; i++) {
        arr.push(i);
      }
      setpaginationNumbers(arr);
    }
  }

  function getDataByKey(val) {
    const data = setTimeout(async () => {
      try {
        setIsLoading(true);
        const _data = await fetch(`${url}?q=${val}`, {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_TASTY_API_KEY,
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
          },
        });
        const response = await _data.json();
        setData(response.results);
        setIsLoading(false);
        const _datatoShow = response?.results?.slice(0, itemsPerPage);
        setDataToShow(_datatoShow);
        setPaginationNumbers(
          Math.floor(response?.results?.length / itemsPerPage)
        );
      } catch (error) {
        setIsLoading(false);
      }
    }, 5000);
    return () => {
      clearTimeout(data);
    };
  }

  //Reset function to reset when typing
  function handleReset() {
    if (searchRecipe !== "") {
      setSearchRecipe("");
    } else {
    }
  }

  const handleSsearch = async (val) => {
    setSearchRecipe(val);
    const response = await getDataByKey(val);
  };

  const handlePaginate = (num) => {
    setPageNumber(num);
    const arr = [...data];
    const nextArr = arr.slice(
      itemsPerPage * num - itemsPerPage,
      itemsPerPage * num
    );
    setDataToShow(nextArr);
  };

  return (
    <div>
      <WelcomeModal />
      <br />
      <SearchBar
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        searchRecipe={searchRecipe}
        setSearchRecipe={handleSsearch}
      />
      <div className="flex flex-wrap justify-center m-12">
        {!isLoading &&
          data &&
          data.length > 0 &&
          dataToShow.map((response, index) => {
            const { tags, thumbnail_url, name, description } = response;

            return (
              <Card
                key={index}
                imageUrl={thumbnail_url}
                title={name}
                tag={tags}
                name={name}
                description={description}
              />
            );
          })}
      </div>

      <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
        {paginationNumbers?.map((item) => {
          return (
            <label
              key={item}
              style={{ cursor: "pointer", marginTop: "40px" }}
              onClick={() => handlePaginate(item)}
            >
              {item}
            </label>
          );
        })}
      </div>

      {isLoading && (
        <div className="flex justify-center">
          <span className=" loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}
