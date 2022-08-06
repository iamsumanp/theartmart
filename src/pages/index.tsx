import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import InputComponent from "../components/InputComponent";
import LengthComponent from "../components/lengthComponent";
import prisma from "../../lib/prisma";
import { useEffect } from "react";
import axios from "axios";
const Home: NextPage = ({
  feed,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const clickHandler = async () => {
    const hwllo = await axios.post("http://localhost:3000/api/art");
  };
  return (
    <div className="text-3xl font-bold text-red-500 ">
      <h2 className="mt">Hello artist</h2>
      <InputComponent />
      <LengthComponent />
      <button onClick={() => clickHandler()}>Click</button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.user.findMany({});
  return {
    props: { feed },
    revalidate: 10,
  };
};

export default Home;
