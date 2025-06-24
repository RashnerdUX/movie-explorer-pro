import React from 'react'

const Moviecard = ({movie : {title, poster_path, genre_ids, vote_average, 
original_language
}, genre}) => {

    const rating = parseFloat(vote_average)/2;
    const finalRating = rating.toFixed(1);

    const genreKey = genre_ids[0] 

    const language = original_language.toUpperCase()
    
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className='movie-card'>
        <img src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : './no-movie.png'} alt={`${title} poster`}/>
        <div className='mt-4'>
            <h3>{title}</h3>
        </div>
        <div className='content'>
            <div className='rating'>
                <img src='./star.svg' alt='star icon'/>
                <p>{finalRating}</p>
                <span>•</span>
                <p className='lang'>{genre_ids ? genre.get(genreKey) || "Unknown" : "Unknown"}</p>
                <span>•</span>
                <p className='lang'>{original_language ? language : "N/A"}</p>
            </div>
        </div>
    </div>
  )
}

export default Moviecard