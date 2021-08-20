const initState = {
  post: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log("action delete", action);
  // test action
  if (action.type === "DELETE_POST") {
    // delete post
    let newePosts = state.post.filter((article) => {
      return action.id !== article.id;
    });

    // return state with update
    return {
      ...state,
      post: newePosts,
    };
  }
  return state;
};

export default rootReducer;
