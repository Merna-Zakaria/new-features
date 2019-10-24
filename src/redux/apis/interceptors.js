import axios from 'axios';



export const isHandlerEnabled = (config={}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
      false : true
  }

export const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
      // Modify request here
      request.headers['ApiKey'] = '34346'
    }
    return request
  }







  export const axiosInstanceImage = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
  })

  axiosInstanceImage.interceptors.request.use(
    request => requestHandler(request)
  )




  export const axiosInstancePost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

  axiosInstancePost.interceptors.request.use(
    request => requestHandler(request)
  )