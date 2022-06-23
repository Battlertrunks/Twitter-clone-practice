import { useState } from "react";
import TweetModel from "../Models/TweetModel";
import "./Tweets.scss";

const Tweets = () => {
  const [tweets, setTweets] = useState<TweetModel[]>([]);

  return (
    <section className="Tweets">
      <ul>
        {tweets.map((tweet) => (
          <li></li>
        ))}
      </ul>
    </section>
  );
};

export default Tweets;
