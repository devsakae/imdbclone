"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
      className={`m-4 font-semibold hover:text-amber-500 rounded p-2 ${ genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`}
      href={`/?genre=${param}` }>
        { title }
      </Link>
    </div>
  )
}
