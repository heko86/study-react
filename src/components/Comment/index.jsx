import { useComment } from "src/hooks/useComment";

export const CommentComponets = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>{data.body}</h1>
      <ul>
        <li>{data.name}</li>
        <li>{data.email}</li>
      </ul>
    </div>
  );
};
