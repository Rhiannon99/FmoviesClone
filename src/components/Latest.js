import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Latest = () => {
    const [latestMovies, setMovies] = useState([])

    // const key = "173eedbe7b51cd4828d5694ef52eae1e"

    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=173eedbe7b51cd4828d5694ef52eae1e&language=en-US&page=1'
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

    // function getPosterURL(posterpath) {
    //     return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
    // }
    
    return (
         <div>
            <div className="suggestions flex flex-wrap ml-[2.5vw] ">
                {
                latestMovies.map((latest_movie) => (
                    <div className="col p-2 w-[10vw] h-[35.5vh]" key={latest_movie.id} >
                        <img src={`https://image.tmdb.org/t/p/w500${latest_movie.poster_path}`} alt="" />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Latest
