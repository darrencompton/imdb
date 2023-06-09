import Image from "next/image";
import React from "react";

const API_KEY = process.env.API_KEY;

async function getMovie(movieId) {
  const fetchString = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-us`;
  const res = await fetch(fetchString);
  return await res.json();
}

export default async function MoviePage({ params }) {
  const id = params.id;
  const movie = await getMovie(id);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://www.themoviedb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width="500"
          height="300"
          alt={movie.title || movie.name}
          className="rounded-lg "
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1"> Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie_first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
