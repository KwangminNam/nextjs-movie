import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import Nav from '../components/Nav';

const API_KEY = "902dcecf793ead9c1813ac91d55e8333";
const index = () => {

  const [ movies , setMovies ] =useState();
  useEffect(()=>{
    (async()=>{
      const {results} = await(
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      ).json();
        setMovies(results)
    })();
  },[])

  return (
    <div className='container'>
      <Seo title="index moive!"/>
      {!movies && <h4>Loading!</h4>}
      {movies?.map(item=>(
        <div className='movie' key={item.id}>
           <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <h4>{item.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default index;