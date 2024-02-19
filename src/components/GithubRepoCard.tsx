import getRandomCat from "@/libs/catRandomImageRequest";
import React, { useState, useEffect } from 'react';

const GithubRepoCard = ({ title, link, number }) => {
  const [imageUrl, setImageUrl] = useState("");
  const first = false;
  const getCatImageUrl = async ()=> {
    const catUrl = await getRandomCat();

    setImageUrl(catUrl);
  };
  useEffect(() => {
    getCatImageUrl();
    const interval = setInterval(() => {
      getCatImageUrl();
    }, 10000); // 1000 milliseconds = 1 second
    return () => clearInterval(interval); // clear interval when component unmounts
  },[]);
    return (
      <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imageUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
    );
  };
  export default GithubRepoCard