import Image from 'next/image';
import Link from 'next/link';
import MovieInfo from './MovieInfo';
import MovieLikes from './MovieLikes';

export default function MoviesList({ movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      key={movie.id}
      className='flex gap-3 mb-8 group'
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || poster_path
        }`}
        className='group-hover:opacity-80 transition-opacity duration-200'
        width={250}
        height={50}
        placeholder='blur'
        blurDataURL='/loading.svg'
        alt='Image not available'
      ></Image>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between min-w-fit'>
          <div>
            <h2 className='font-semibold'>
              {movie.title || movie.original_name}
              {' ('}
              {movie.vote_average.toFixed(1)}
              {')'}
            </h2>
            <MovieInfo movie={ movie } />
          </div>
          <MovieLikes movie={ movie } />
        </div>
        <div>
          <p className='text-md'>{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
}
