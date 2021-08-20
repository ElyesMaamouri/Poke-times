import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     this.setState({ posts: res.data.slice(0, 10) });
  //   });
  // }
  render() {
    const posts = this.props.post;
    // console.log("props", posts);
    const postList = posts.length ? (
      posts.map((item) => {
        console.log("all posts", item.title, item.body);
        return (
          <div className="post card" key={item.id}>
            <div className="card-content">
              <Link to={"/" + item.id}>
                <span className="card-title">{item.title}</span>
              </Link>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <h2>No post here !!</h2>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

export default connect(mapStateToProps)(Home);
