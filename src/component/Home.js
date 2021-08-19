import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((item) => {
        return (
          <div className="post card" key={item.id}>
            <div className="card-content">
              <span className="card-title">{item.title}</span>
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

export default Home;
