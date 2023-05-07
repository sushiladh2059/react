import { useEffect, useState } from "react";

import Tweet from "../components/Tweet";
import axios from "axios";

import CreateTweet from "../components/CreateTweet";
import Navbar from "../components/Navbar";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all",
      {
        headers: {
          apiKey: "6456f92a7213f63d43f028f8",
        },
      }
    );

    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
      <CreateTweet />
      {tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.user.fullname}
            username={tweet.user.name}
            key={tweet.authorname}
            avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}?v=4`}
            content={tweet.content}
            image={tweet.image}
          />
        );
      })}
    </>
  );
};

export default Home;
