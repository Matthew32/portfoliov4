import { NextResponse } from 'next/server'

const getRandomCat = async () => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=1`
    );
    const repos = await res.json() ?? {};

    return repos[0].url;
  } catch (e) {
    return "https://ih1.redbubble.net/image.973872181.8811/st,small,507x507-pad,600x600,f8f8f8.jpg";
  }
};

export default getRandomCat;