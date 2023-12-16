import  { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ScaleLoader } from 'react-spinners';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1920, min: 900 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 900, min: 768 },
    items: 4
  }, 
  medium: {
    breakpoint: { max: 768, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};



function MovieList( {title, filter , carousel = false, duration= 500, speed = 1000 }) {
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(false)

const getMovies = async () => {
  setLoading(true);
 const response = await fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`).then(res => res.json());
  setTimeout(()=>{
     setMovies(response.data.movies);
   setLoading(false)
  }, 1000)
 
  
}

useEffect(() => {
  getMovies();
},[]);

  return (
    <div className='my-12'>
          <h1 className='text-gray-100 text-3xl font-medium ' title={title}> {title}</h1>
       {loading && (
        <div className='flex justify-center py-5'>
        <ScaleLoader color="#36d7b7" />
        </div>
       )}
       {movies.length > 0 && (
         <>
         {carousel ?(
           <div className='my-7'>
              <Carousel  responsive={responsive}
               loop
               swipeAble={true}
               autoPlay={true}
               autoPlaySpeed={speed}
               transitionDuration={duration}
               infinite={true}
              >
           
                   {movies?.map(movie =>(
                   <MovieCard movie={movie} {...movie} key={movie?.id} />
                   ))}
 
          </Carousel>
           </div>
         ) : (
           <div className='my-7 flex items-center justify-around truncate flex-wrap '>
             {movies?.map(movie =>(
             <MovieCard movie={movie} {...movie} key={movie?.id} />
            ))}
             
           </div>
 
         )}
         
         </>

       )}
       
       
    </div>
  )
}

export default MovieList