import {createContext, useEffect, useReducer} from "react";
import { MovieReducer } from "./MovieReducer";
import axios from "axios"


console.log(process.env.REACT_APP_API_KEY)


export const INITIAL_STATE ={

    page:1,
    results:[],
    total_pages:0,
    query:"" || "action",
    isLoading:false,
    error:false,

}

export const MovieContext = createContext(INITIAL_STATE)


export const MovieContextProvider= ({children}) =>{


    const [state,dispatch] = useReducer(MovieReducer,INITIAL_STATE)

    let API =`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}`


const FetchAPIData = async(URL) => {

   
    dispatch({type: 'SET_LOADING'})

   
    
    try{

        const res = await axios.get(URL)

        console.log(res.data)

       
       
       

        

            dispatch({
            
                type:"GET_MOVIES",
                payload:{
                    page:res.data.page,
                    results:res.data.results,
                    total_pages:res.data.total_pages,
                    query:state.query
                   
                   
                    
                }
            
            
            }) 


        
            

    }catch(err){


        console.log(err)
    }


}

const searchMovies =(searchQuery)=>{

    dispatch({

        type:"SEARCH_MOVIES",
        payload:searchQuery,
    })



}


const NextPage =()=>{

dispatch({

    type:"NEXT_PAGE"
})

}


const PreviousPage =()=>{

    dispatch({

        type:"PREV_PAGE"
    })

}



useEffect(()=>{

   
        FetchAPIData(`${API}&query=${state.query===""?"action" :state.query}&page=${state.page}`)

   
},[API,state.query,state.page])








   return(

    <MovieContext.Provider value={{...state,searchMovies,PreviousPage,NextPage}}>

        {children}
    </MovieContext.Provider>

   )

}
