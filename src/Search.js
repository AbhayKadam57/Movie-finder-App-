import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

export const Search = () => {

  const {query,searchMovies} = useContext(MovieContext)

  return (
    <>
       <form onSubmit={(e)=>e.preventDefault()}>
        <input type="search" placeholder="Search movie..." value={query} onChange={(e)=>searchMovies(e.target.value)}/>
      </form>
    
    </>
   
  )
}
