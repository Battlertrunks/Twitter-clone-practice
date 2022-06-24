import { useContext, useEffect, useState } from "react";
import TweetsContext from "../Context/TweetsContext";
import TweetModel from "../Models/TweetModel";
import Tweet from "./Tweet";
import "./Tweets.scss";

const Tweets = () => {
  const [postedTweets, setPostedTweets] = useState<TweetModel[]>([]);

  const { tweets } = useContext(TweetsContext);

  useEffect(() => {
    setPostedTweets(tweets);
  }, [tweets]);

  return (
    <section className="Tweets">
      <ul className="tweet-container">
        {postedTweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.key} />
        ))}
      </ul>
    </section>
  );
};

export default Tweets;
