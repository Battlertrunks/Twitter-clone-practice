import { ReactNode, useEffect, useState } from "react";
import TweetModel from "../Models/TweetModel";
import TweetsContext from "./TweetsContext";
import Tweets from "../TempData/Tweets";

function TweetsContextProvider({ children }: { children: ReactNode }) {
  const [tweets, setTweets] = useState<TweetModel[]>([]);

  const addTweet = (newTweet: TweetModel): void => {
    setTweets((prev) => [...prev, newTweet]);
  };

  useEffect(() => {
    setTweets(Tweets);
  }, []);

  return (
    <TweetsContext.Provider value={{ tweets, addTweet }}>
      {children}
    </TweetsContext.Provider>
  );
}

export default TweetsContextProvider;
