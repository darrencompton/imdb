import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://www.themoviedb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width="500" height="300" alt={result.title} className="sm:rounded-t-lg group-hover:opacity-60 transition-opacity duration-500" placeholder='blur' blurDataURL='/spinner.svg' style={{maxWidth: "100%", height:"auto"}} ></Image>
            <div className="p-2">
                <p className='text-md  line-clamp-2'>{result.overview}</p>
                <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
                <p className='flex'>{result.release_date || result.first_air_date}
                <FiThumbsUp className='h-5 mr-1 ml-3'/>{result.vote_count}

    </p>        </div>
        </Link>
    </div>
  )
}
