import * as React from "react";
import { useState, useEffect, useCallback } from "react";
type MovieProps = {
  title: string;
  description: string;
  memo: boolean;
  setLike: (title: string) => void;
};

function Movie({ title, description, memo, setLike }: MovieProps) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {description}</div>
      <button onClick={() => setLike(title)}> set like </button>
    </div>
  );
}

const MemoizedMovie = React.memo(Movie);

function index() {
  const [, setToggle] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const setLike = useCallback((title: string) => {
    console.log(title);
  }, []);

  return (
    <div>
      <Movie
        setLike={setLike}
        title="Holu"
        description="releaseDate"
        memo={false}
      />
      <MemoizedMovie
        setLike={setLike}
        title="Holu 2"
        description="releaseDate 2"
        memo={true}
      />
    </div>
  );
}

export default index;
