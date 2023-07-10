import { useRouter } from "next/router";
import { Header } from "src/components/Header";

const PostId = () => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <>
      <Header />
      <div>{router.query.id}</div>
    </>
  );
};
export default PostId;
