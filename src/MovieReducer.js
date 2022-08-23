export const MovieReducer =(state,action)=>{


    switch(action.type){

        case "SET_LOADING":{

            return{

                ...state,
                isLoading:true
            }

        }



        case "GET_MOVIES":{

            if(action.payload.results===[ ]){

                return{

                    ...state,
                    page:0,
                    total_pages:0,
                    isLoading:true,
                }


            }



            return{
                ...state,
                page:action.payload.page,
                results:action.payload.results,
                total_pages:action.payload.total_pages,
                isLoading:false,
                error:false,
                
                
            }

        }
        case "SEARCH_MOVIES":{


            return{

                ...state,
                query:action.payload

            }



        }
        
        case "NEXT_PAGE":{

            let PageNum = state.page+1

            if(PageNum>state.total_pages){

                PageNum = 1
            }

            return{

                ...state,
                page:PageNum,
            }

        }
        case "PREV_PAGE":{

            let PageNum = state.page-1

            if(PageNum<=0){

                PageNum =state.total_pages
            }

            return{

                ...state,
                page:PageNum,
            }
        }
        
        
        
        default:{

            return state
        }

    }


}