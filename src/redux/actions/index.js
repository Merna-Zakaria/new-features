import  { getImagesSAGA,
     getSingleImageSAGA,
      createPostSAGA,
      getPostsSAGA
    } from './types';


 export const onGetImages = () => ( {type : getImagesSAGA} );
 export const onGetSingleImage = (id) => ({ type : getSingleImageSAGA, id })
 export const onCreatePost = (data) => ({ type : createPostSAGA, data})
 export const onGetPosts = () => ( {type : getPostsSAGA} )