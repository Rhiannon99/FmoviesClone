import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Suggestions from '../components/Suggestions'
import Latest from '../components/Latest'
import MovieDescription from './movieDescription';

const Home = () => {

    const [movies, setMovies] = useState([])
    // const key = "173eedbe7b51cd4828d5694ef52eae1e"

    // const posterURL = (posterpath)=>{
    //     return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
    // }

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
        <div className='bg-zinc-900' >
            {
                <div className="header">
                    {movies.map((movie) => (
                        <div className="card" key={movie.id}>
                            <img src={movie.poster_path} alt="" />
                        </div>
                    ))
                    }
                </div>
            }

            <br />
            <div><p className='text-white text-2xl m-6'>Suggestion</p></div>
            <Suggestions/>
            <br />
            <div><p className='text-white text-2xl m-6'>Top Rated</p></div>
            <Latest />
            <MovieDescription/>
        </div>
    )
}

export default Home
