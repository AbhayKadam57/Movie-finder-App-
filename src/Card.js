
import React, { useContext} from 'react';
import { MovieContext } from './MovieContext';

const Card = () => {

    const {results,isLoading,page} = useContext(MovieContext)

    
    console.log(page)

 

  return (

    <div className="cardContainer">
       {!isLoading ? results.map((item)=>(

                    <div className="card">
                                
                    <div className="poster">
                        <h4>{item?.original_title ? item.original_title : item.original_name}</h4>
                        <img src={ item.poster_path ?`https://image.tmdb.org/t/p/w500/${item?.poster_path}`:"https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg"} alt="" />
                        <h5>RATING: {item?.vote_average}/10</h5>    
                    </div>
                    </div>)):
                    <div>
                      <h1>Loading...</h1>
                    </div>
              
       } 
     
</div>
    
  );
}

export default Card;
