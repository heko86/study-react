import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArrary";

export const UsersComponents = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No users found</p>;
  }
  return (
    <div>
      <ol>
        {data.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <p>{`${user.name} (${user.email})`}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
