import axios from "axios";

const getRandomCat = async () => {
    try{
    const res = await axios.get(
      `https://matttavern.com/api/pur`
    );

    let repos = res.data;

    return repos;
    }catch(e){
        return "https://ih1.redbubble.net/image.973872181.8811/st,small,507x507-pad,600x600,f8f8f8.jpg";
    }
};

export default getRandomCat;