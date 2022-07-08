import { useContext } from "react";

import { GlobalContext } from "../../../Context";
import { MoviesWrapper } from "./styles";

export default function Movies() {
  const { letterboxd } = useContext(GlobalContext);

  return (
    <MoviesWrapper className="animationShow">
      {letterboxd.movies.map((movie, index) => (
        <a key={index} href={movie.poster} target="_blank" rel="noreferrer">
          <img src={movie.poster} alt=':(' />
          <div>
            <span className="title">{movie.title}</span>
            <span className="rate">{movie.rate}</span>
          </div>
        </a>
      ))}
    </MoviesWrapper>
  )
}