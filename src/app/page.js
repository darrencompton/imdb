import Image from "next/image";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const fetchString = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week"
  }?api_key=${API_KEY}&language=en-us&page=1`;
  const res = await fetch(fetchString, { next: { revalidate: 100 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results[0]);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
