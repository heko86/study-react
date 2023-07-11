import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PostsComponent />
    </div>
  );
};
export default Posts;
