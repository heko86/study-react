import { Inter } from "next/font/google";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを叩く</p>
      <Main page="Index" />
    </>
  );
};
export default Index;
