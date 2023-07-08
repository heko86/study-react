import { useCallback, useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};
// stateとactionを受け取って新しいstateを返す
const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: {
      throw new Error("no such action type!");
    }
  }
};
const Posts = () => {
  // stateにはinitialStateが入ってくる
  // reducerは現在のstateとactionを受け取り新しいstateを返すもの
  // 新しいactionを起こすのをdispatchが担う
  // dispatchを使って新しいactionを発生させて既存のstateと組み合わせて新しいstateを生み出す
  const [state, dispatch] = useReducer(reducer, initialState);
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json = await res.json();
      // dispatchで送り度溶けるtypeとdataはactionの中に入る
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中です</div>;
  }
  if (state.error) {
    <div>{state.error.message}</div>;
  }
  if (state.data.length < 0) {
    return <div>データは空です</div>;
  }

  return (
    <>
      {state.loading ? (
        <div>ローディング中です</div>
      ) : state.error ? (
        <div>{state.error.message}</div>
      ) : state.data.length > 0 ? (
        <ol>
          {state.data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ) : (
        <div>データは空です</div>
      )}
    </>
  );
};
export default Posts;
