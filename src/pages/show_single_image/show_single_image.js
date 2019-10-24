import React from 'react';
import SingleImage from '../../component/card/card';
import { connect } from 'react-redux';

class ShowSingleImage extends React.Component {

    render () {
        if(this.props.singleImage){
            
        return (
            <div>
                imaage
            <SingleImage image={this.props.singleImage}/>
                </div>
        )
    }
    else{
        return(<div>loading</div>)
    }
}

}

const mapStateToProps = state => {
    console.log('show single image',state)       
    return { singleImage : state.images.fetchSingleImage }
}

export default connect(mapStateToProps) (ShowSingleImage);