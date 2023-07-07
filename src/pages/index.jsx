import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import Posts from "src/components/Posts";

const Home = () => {
  return (
    <>
      <Header />
      <Posts />
      <Main page="Index" />
    </>
  );
};
export default Home;
