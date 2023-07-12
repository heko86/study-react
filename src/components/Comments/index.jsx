import Link from "next/link";
import { useComments } from "src/hooks/useFetchArrary";

export const CommentsComponents = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No comments found</p>;
  }
  return (
    <div>
      <ol>
        {data.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>
                <p>{comment.body}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
