import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
class Post extends Component {
  // state = {
  //   post: null,
  // };

  // componentDidMount() {
  //   console.log("data from Route in app.js", this.props);
  //   let id = this.props.match.params.post_id;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({
  //         post: res.data,
  //       });
  //     });
  // }

  handelClick = () => {
    // pass function deletePost() in props and get id from 'this.props.post.id'
    this.props.deletePost(this.props.post.id);
  };
  render() {
    console.log("deletepost", this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>

        <div className="center">
          <button className="btn grey" onClick={this.handelClick}>
            DELETE POST
          </button>
        </div>
      </div>
    ) : (
      <h2 className="center">Loading post ....</h2>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.post.find((article) => {
      return article.id === id;
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // deletePost() function delete post with id
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
