import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@chakra-ui/react";
function Movie({
  title,
  releaseDate,
  memo,
  setLike,
}: {
  title: string;
  releaseDate: string;
  memo: boolean;
  setLike: (title: string) => void;
}) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);

  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
      <Button onClick={() => setLike(title)}> set like </Button>
    </div>
  );
}

const MemoizeMovie = React.memo(Movie);

function index() {
  const [, setToggle] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // now  setLike is the same instace in each render
  const setLike = useCallback((title: string) => {}, []);

  return (
    <div>
      <Movie
        setLike={setLike}
        title="Holu"
        releaseDate="releaseDate"
        memo={false}
      />
      <MemoizeMovie
        setLike={setLike}
        title="Holu 2"
        releaseDate="releaseDate 2"
        memo={true}
      />
    </div>
  );
}

export default index;
