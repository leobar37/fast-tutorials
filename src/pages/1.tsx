import * as React from "react";
import { useState, useEffect, memo } from "react";

type MovieProps = {
  title: string;
  description: string;
  memo: boolean;
};

function Movie({ title, description, memo }: MovieProps) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);

  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Descripcion: {description}</div>
    </div>
  );
}

const MovieMemoized = memo(Movie);

function index() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Movie title="Hola" description="releaseDate" memo={false} />
      <MovieMemoized title="Hola" description="releaseDate" memo={toggle} />
    </div>
  );
}

export default index;
