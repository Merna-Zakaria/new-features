import React, { Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from '../component/header/header';
import Auth from './auth';
import ShowSingleImage from '../pages/show_single_image/show_single_image';
const Home = React.lazy ( () => import ('../pages/home/home' ));
const Blog = React.lazy ( () => import ('../pages/blog/blog' ));
const AboutUs = React.lazy ( () => import ('../pages/about_us/about_us' ));

const Routing = () => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
        {...rest}
        render = { 
             props => Auth.getAuth() ?
             ( <Component {...props} /> ) : 
             ( <Redirect to={{pathname: "/home" }}/>)
        }
        />
    )
    


    return (
        <BrowserRouter>
        <Header />
        <Suspense fallback={<div>loading</div>}>
                  <Route path='/home' component={Home} />
                  <PrivateRoute path='/aboutUs' component={AboutUs} />
                  <PrivateRoute path='/blog' component={Blog} />
                  <PrivateRoute path='/image/:id' component={ShowSingleImage} />
        </Suspense>
        </BrowserRouter>
    )
}
export default Routing;

