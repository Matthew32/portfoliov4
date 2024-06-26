import getRandomCat from "@/libs/catRandomImageRequest";
import React, { useState, useEffect, MouseEventHandler, HtmlHTMLAttributes } from 'react';
import Loading from './Loading'

const GithubRepoCard = ({ title, link, number, usedImages = [] }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);
  const startLoading = async (event: any) => {
    setLoading(true);
  };
  const first = false;

  const hasDuplicates = (url) => {
    for (let i = 0; i < usedImages.length; i++) {
      if (usedImages[i] === url) {
        return true;
      }
    }
    return false;
  };
  const getCatImageUrl = async () => {
    let catUrl = await getRandomCat();
    while (hasDuplicates(catUrl)) {
      catUrl = await getRandomCat();
    }
    usedImages.push(catUrl);

    setImageUrl(catUrl);
  };
  useEffect(() => {
    getCatImageUrl();
  }, []);
  return (

    <a onClick={startLoading} href={link} className="hover:shadow-lg shadow-inner w-full block shadow-2xl">
      <Loading hidden={!isLoading} className="h-full w-full" />
      <div hidden={isLoading} className="relative overflow-hidden bg-clip-padding bg-blue-600 border-4 border-blue-300 border-dashed">
        <div className="h-72 object-cover ">
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