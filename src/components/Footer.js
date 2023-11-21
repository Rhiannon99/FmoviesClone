import React from 'react'

const Footer = () => {
    return (

        <div>
            <div className='flex main-container bg-black'>
                <div className='first-container ml-3 pt-4'>
                    <div>
                        <img src="images/logo.png" className='h-10  rounded' />
                    </div>
                    <div>
                        <p className='text-zinc-500 mt-2'>
                            Fmovies - Free movies online, here you can watch movies online
                            in high quality for free without <br />annoying of advertising, just come
                            and enjoy your movies online. fmovie, fmovies, bmovies
                        </p>
                        <p className='text-zinc-500 mt-8 mb-5'>
                            Disclaimer: This site does not store any files on its server. All contents are
                            provided by non-affiliated third parties.
                        </p>
                    </div>
                </div>
                <div className="grid grid-col-12">
                    <div className='flex second-container mt-2 ml-[10vh]'>
                        <div>
                            <div className=' text-white'>
                                <h2>MOVIES</h2>
                                <p className='text-blue-300'>Horror</p>
                                <p className='text-blue-300'>Mystery</p>
                                <p className='text-blue-300'>Thriller</p>
                                <p className='text-blue-300'>Comedy</p>
                                <p className='text-blue-300'>Crime</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className=' text-white ml-10 '>
                                <h2>COUNTRY</h2>
                                <p className='text-blue-300'>Canada</p>
                                <p className='text-blue-300'>United States</p>
                                <p className='text-blue-300'>Malta</p>
                                <p className='text-blue-300'>United Kingdom</p>
                                <p className='text-blue-300'>Japan</p>
                            </div>
                            <div >
                                <div className=' text-white ml-10 '>
                                    <h2>FREE MOVIES</h2>
                                    <p className='text-blue-300'>Movies</p>
                                    <p className='text-blue-300'>TV-Series</p>
                                    <p className='text-blue-300'>Top IMDb</p>
                                </div>
                            </div>
                            <div>
                                <div className=' text-white ml-10'>
                                    <h2>HELP</h2>
                                    <p className='text-blue-300'>FAQ's</p>
                                    <p className='text-blue-300'>DMCA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-zinc-500 bg-black align-items-center'>
                <div className=' justify-center text-align-center'>
                <p>Copyright © 2023 Fmovies.to. All Rights Reserved</p>
                </div>
            </div>
        </div>


    )
}

export default Footer
