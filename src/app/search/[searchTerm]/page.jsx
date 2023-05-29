import Results from "@/app/components/Results";
import React from "react";
const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
  const { searchTerm } = params;
  const fetchString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=true`;
  console.log(fetchString);
  const res = await fetch(fetchString);
  if (!res.ok) {
    throw new Error("Error fetching Data");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div className="">
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">Nothing Found</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
