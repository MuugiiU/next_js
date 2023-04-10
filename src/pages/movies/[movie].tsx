import React from "react";
import { useRouter } from "next/router";

const Movie = () => {
  const obj = useRouter();
  console.log(obj);
  return <div>movie</div>;
};

export default Movie;
