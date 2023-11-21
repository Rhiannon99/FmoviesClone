import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDescription = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const { id } = useParams();
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=173eedbe7b51cd4828d5694ef52eae1e`
  console.log(apiUrl)
  const fetchApi = async (url) => {
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        setMoviesDetails(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  // console.log(props)
  useEffect(() => {
    // console.log(params)
    fetchApi(apiUrl)
  })

  return (
    <div className='bg-zinc-900 h-[100%] -mb-[10em]'>
      <div className="banner pt-5 ">
        <img src={`https://image.tmdb.org/t/p/w500${moviesDetails?.poster_path}`} alt="movie-banner" 
        className='ml-[50vh] h-[70vh] w-[50vw] bg' />
      </div>


      <div className="description-box mt-[5em] ml-[15em] mb-[10em]  p-10" >
        <div className="title pl-[19px] text-2xl text-white pl">
          {moviesDetails?.title}
        </div>
        <div className="description text-justify text-white pb-1 pl-[19px] pr-[55vh] min-h-fit ">
          {moviesDetails?.overview}
        </div>
        <div className="details">
          <div className="actor flex pb-1 pl-[19px]">
            <p className='text-white'>Release Date: </p>
            <p className="text-blue-300 ml-2">{moviesDetails?.release_date}</p>
            <div className="directo flex pb-1 pl-[19px] ml-[10em]">
            <p className='text-white'>Country: </p>
            {
             moviesDetails.production_countries && moviesDetails.production_countries.map((country) =>{

                return <p className="text-blue-300 ml-2" key={country.id}>{country.name}</p>
              })
            }
            
          </div>
          </div>
          <div className="directo flex pb-1 pl-[19px]">
            <p className='text-white'>Genre: </p> 
            {
             moviesDetails.genres && moviesDetails.genres.map((genre) =>{

                return <p className="text-blue-300 ml-2" key={genre.id}>{genre.name}</p>
              })
            }
          </div>
          <div className="directo flex pb-1 pl-[19px]">
            <p className='text-white'>Production Company: </p>
            {
             moviesDetails.production_companies && moviesDetails.production_companies.map((company) =>{

                return <p className="text-blue-300 ml-2" key={company.id}>{company.name}</p>
              })
            }
            <p className="text-blue-300 ml-2">{moviesDetails?.company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDescription
