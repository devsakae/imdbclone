"use client";
import { useState } from 'react';
import MoviesCard from "./MoviesCard";
import MoviesList from "./MoviesList";

export default function Results({ results }) {
  const [list, setList] = useState(true);

  return (
    <div className="mx-6">
      <div className="flex gap-2 justify-center mb-4">
        See results in
        <button onClick={ () => setList(true) }>List</button>
        <button onClick={ () => setList(false) }>Cards</button>
      </div>
      <div className='flex flex-wrap gap-2 justify-center'>
        {
          list ? results.map((result) => <MoviesList key={result.id} movie={result} />) : results.map((result) => <MoviesCard key={result.id} movie={result} />)
        }
      </div>
    </div>
  )
}
