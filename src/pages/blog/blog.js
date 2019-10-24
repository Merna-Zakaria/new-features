import React from "react";
import { connect } from "react-redux";
import { onGetImages, onCreatePost, onGetPosts } from "../../redux/actions";
import SingleImage from "../../component/card/card";

class Blog extends React.Component {

  fetchImage = () => {
    this.props.onGetImages();
    console.log("hi");
  };

  passSingleImage = () => {
    if (!this.props.images) {
        return <div>Loading00000</div>;
      }
      return (
    <div style={{textAlign: 'center'}}>
        {this.props.images.map(img => {
            console.log('hi from blog',img)
         return <SingleImage image={img} />
        })
        }
    </div>
      )
  }

  render() {
   
    return (
       <div className="container">
            Private Blog
            <button onClick={this.fetchImage}>get images</button>
            <button onClick={ () => this.props.onGetPosts()}>get posts</button>
            <button onClick={ () => this.props.onCreatePost( {
           userId: 101,
           id:101,
           title: 'TITLE',
           body: 'BODY'
       })} >
         create post
         </button>
            <div>
            {this.passSingleImage()}
            </div>
       </div>
    
    );
  }
}

const mapStateToProps = state => {
    // console.log('state in blog',state)
  return { images: state.images.fetchImages };
};

export default connect(
  mapStateToProps,
  { onGetImages, onCreatePost, onGetPosts }
)(Blog);
