import * as saga from './sagas';
import { takeLatest } from 'redux-saga/effects';
import  { 
      getImagesSAGA,
      getSingleImageSAGA,
      createPostSAGA,
      getPostsSAGA
     } from '../actions/types';

export default function* rootSaga() {
    yield takeLatest ( getImagesSAGA, saga.GetImages )
    yield takeLatest ( getSingleImageSAGA, saga.GetSingleImage)
    yield takeLatest ( createPostSAGA, saga.CreatePost)
    yield takeLatest ( getPostsSAGA, saga.GetPosts)
}