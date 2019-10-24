import  { 
     getImages,
     getSingleImage,
     createPost,
     getPosts
     } from '../actions/types';
  


export const  imageReducer = ( state = {}, action ) => {
    switch(action.type) {
        
        case getImages :
            return {...state, fetchImages : action.payload};
        case getSingleImage :
            return {...state, fetchSingleImage : action.payload};  

            default :
            return state;   
    }
}

export const postReducer =  ( state = {}, action ) => {
    
    switch (action.type) {
           
        case createPost :
            return {...state, posts : [...state.posts,action.payload]  }   
        case getPosts :
                return {...state, posts : action.payload}
            default :
            return state
    }
}