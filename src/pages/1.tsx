import * as React from "react";
import { useState, useEffect } from "react";
function Movie({
  title,
  releaseDate,
  memo,
}: {
  title: string;
  releaseDate: string;
  memo: boolean;
}) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

const MemoizeMovie = React.memo(Movie);

function index() {
  const [, setToggle] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Movie title="Holu" releaseDate="releaseDate" memo={false} />
      <MemoizeMovie title="Holu 2" releaseDate="releaseDate 2" memo={true} />
    </div>
  );
}

export default index;
