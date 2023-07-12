import Link from "next/link";
import { UseComments } from "src/hooks/useComments";

export const CommentsComponents = () => {
  const { data, error, isLoading, isEmpty } = UseComments();

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
