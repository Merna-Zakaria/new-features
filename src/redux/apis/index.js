import React from 'react';
import axios from 'axios';
import { axiosInstanceImage, axiosInstancePost} from './interceptors';

const URL = 'https://jsonplaceholder.typicode.com/photos';

class Api extends React.Component {

    // static getImages = async() => await axios.get( URL )
    // static getSingleImage = async (id) => await axios.get( `${URL}/${id}`)
    // static getPosts = async () => await axios.get( 'https://jsonplaceholder.typicode.com/posts' )
    static createPost = async (data) => await axios.post( 'https://jsonplaceholder.typicode.com/posts', data)


    
    //---------------------interceptors-----------------
    static getImages = async() => await axiosInstanceImage.get()
    static getSingleImage = async(id) => await axiosInstanceImage.get( `${URL}/${id}`, { handlerEnabled: false })
    static getPosts = async() => await axiosInstancePost.get ()




}

export default Api;