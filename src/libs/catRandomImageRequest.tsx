import { NextResponse } from 'next/server'

const getRandomCat = async () => {
    try{
      const res = await fetch(
        `https://matttavern.com/api/pur`
      );
      let repos = await res.json();
  
      return repos;
    }catch(e){
        return "https://ih1.redbubble.net/image.973872181.8811/st,small,507x507-pad,600x600,f8f8f8.jpg";
    }
};

export default getRandomCat;