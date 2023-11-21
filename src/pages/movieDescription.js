import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDescription = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const {id} = useParams();
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=173eedbe7b51cd4828d5694ef52eae1e`
  const fetchApi = async (url) => {
    axios.get(url)
        .then((response) => {
            console.log(response.data.results)
            setMoviesDetails(response.data.results)
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
    <div className='bg-zinc-900 h-[100vh]'>
      {/* <div className="banner">
        <img src={`https://image.tmdb.org/ ${moviesDetails.poster_path}`} alt="movie-banner" className='ml-[300px]' />
      </div> */}
      <div className="description-box ml-10 " >
        <div className="title pl-[19px] text-2xl text-white pl">
          {/* {{moviesDetails? moviesDetails.original_title}} */}
        </div>
        <div className="description text-justify text-white pb-1 pl-[19px] pr-[55vh] min-h-fit ">
          {moviesDetails?.overview}
        </div>
        <div className="details">
          <div className="actor flex pb-1 pl-[19px]">
            <p className='text-white'>Release Date: </p>
            <p className="text-blue-300 ml-2">{}</p>
          </div>
          <div className="directo flex pb-1 pl-[19px]">
            <p className='text-white'>Directors: </p>
            <p className="text-blue-300 ml-2">Chrisotper Nolen</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDescription
