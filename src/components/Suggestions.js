import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Suggestions = () => {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=173eedbe7b51cd4828d5694ef52eae1e&language=en-US&page=1'
    const getApi = async (url) => {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results)
                setMovies(response.data.results)
            }).catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        getApi(apiUrl)
    }, [])
    return (
        <div>
            <div className="suggestions flex flex-wrap ml-[2.5vw] ">
                {movies.map((movie) => (
                    <div className="col p-2 w-[10vw] h-[35.5vh]" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                            onClick={() => { navigate(`/movie/${movie.id}`) }}
                            className='cursor-pointer' />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Suggestions;
