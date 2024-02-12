/* eslint-disable */
"use client"
import ContainerBlock from "../components/containerBlock";
import LatestCode from "../components/getLatestRepos";
import Hero from "../components/hero";
import getLatestRepos from "../libs/getLatestReposRequest";
import userData from "../constants/data";
import Contact from "../components/contact"
export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Mateo Martinez - Web, Game, Mobile Developer."
    >
      <Hero />
      <LatestCode repositories={repositories} />
      <Contact />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const repositories = await getLatestRepos(userData);
  return {
    props: {
      repositories,
    },
  };
};

/* eslint-enable */