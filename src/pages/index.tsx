import type { NextPage } from "next";
import Questions from "../components/questions";

const Home: NextPage = () => {
  return (
    <p className="w-4/5 mx-auto">
      <Questions />
    </p>
  );
};

export default Home;
