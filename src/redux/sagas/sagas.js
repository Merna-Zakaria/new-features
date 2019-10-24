import { call, put } from 'redux-saga/effects';
import { 
      getImages,
      getSingleImage,
      createPost,
      getPosts
     } from '../actions/types';
import Api from '../apis';

export function* GetImages () {
    try {
        const response = yield call (Api.getImages)
        // console.log('get_images_response' , response)
        yield put ( { type : getImages, payload : response.data })
    } catch (error){
        console.log(error)
    }
}

export function* GetSingleImage (action) {
    const {id} = action;
    try {
        const response = yield call (Api.getSingleImage, id)
        console.log('get_single_images_response' , response)
        yield put ({ type : getSingleImage, payload : response.data})
    }catch (error) {
        console.log(error)
    }
}

export function* CreatePost (action) {
    const {data} = action;
 try {
    const response = yield call (Api.createPost, data)
    console.log('create_post_response' , response)
    yield put ({ type : createPost, payload : response.data })
 }catch (error){
     console.log(error)
 }
}

export function* GetPosts () {
    try {
        const response = yield call (Api.getPosts)
        console.log('get_posts_response', response)
        yield put ({ type : getPosts, payload : response.data })
    }catch (error) {
        console.log(error)
    }
}
