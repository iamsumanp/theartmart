import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import InputComponent from "../components/InputComponent";
import LengthComponent from "../components/lengthComponent";
import prisma from "../../lib/prisma";
import axios from "axios";

type deeT = {
  id: string;
  title: string;
  description: string;
  image: string;
  reviewed: boolean;
  artistId: null;
};

const Home: NextPage = ({
  feed,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const clickHandler = async () => {
    console.log("data", feed);
  };

  return (
    <div className="font-bold ">
      <h2 className="mt">Hello artist</h2>
      <InputComponent />
      <LengthComponent />

      <div>
        {feed.map((dee: deeT) => (
          <div key={dee.id}>
            <span style={{ margin: "1rem" }}>{dee.title}</span>
            <span>{dee.description}</span>
            <span>{dee.image}</span>
            {/* <span></span> */}
            <hr />
          </div>
        ))}
      </div>
      <button onClick={() => clickHandler()}>Click</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/art/all");
  return {
    props: {
      feed: data,
    },
    // revalidate: 10,
  };
};

export default Home;
