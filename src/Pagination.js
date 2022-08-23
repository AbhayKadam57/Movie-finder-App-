import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

function Pagination() {

  const {page,total_pages,NextPage,PreviousPage} = useContext(MovieContext)

  return (
    <div className="pagination">
      <button onClick={()=>PreviousPage()}>PREV</button>
      <h4>{page} of {total_pages}</h4>
      <button onClick={()=>NextPage()}>NEXT</button>
    </div>
  )
}

export default Pagination
