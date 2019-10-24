import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onGetSingleImage } from '../../redux/actions';

// const cardStyle = {
//     width :'18 rem'
// }

class SingleImage extends React.Component {

  getSingleImage = (id) => {
    this.props.onGetSingleImage(id)
    console.log('button clicked')
  }


  render() {
      console.log('response reached to card',this.props.image)
    return (
        <div className="card" style={{width:"18rem", display:'inline-block'}}>
    <img src={this.props.image.url} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{this.props.image.title}</h5>
      <button onClick={ () => this.getSingleImage(this.props.image.id)} className="btn btn-primary">
       <Link to={`/image/${this.props.image.id}`} >
        Show in details
      </Link>
      </button>
    </div>
  </div>
    )
  }
}

// const mapStateToProps = state => {
//     return { images : state.images.fetchImages}
// }

export default connect(null, { onGetSingleImage }) (SingleImage);