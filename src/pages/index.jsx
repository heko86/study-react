import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
const Index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを叩く</p>
    </div>
  );
};
export default Index;
