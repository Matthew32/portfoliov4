"use client"
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/containerBlock";
import LatestCode from "../components/getLatestRepos";
import Hero from "../components/hero";
import getLatestRepos from "../libs/getLatestReposRequest";
import userData from "../constants/data";
import Contact from "../components/contact"
export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Mateo Martinez - Developer, Writer, Creator"
    >
      <Hero />
      <LatestCode repositories={repositories} />
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