import axios from "axios";

const getLatestReposRequest = async (data = {githubUsername:''}) => {
    const username = data.githubUsername;

    try{
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:updated`
    );

    let repos = res.data.items;
    let latestSixRepos = repos.splice(0, 12);
    return latestSixRepos;
  }catch(e){
    return []
  }
};

export default getLatestReposRequest;