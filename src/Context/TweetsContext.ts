import { createContext } from "react";
import TweetModel from "../Models/TweetModel";

export interface TweetsContextModel {
  tweets: TweetModel[];
  addTweet: (newTweet: TweetModel) => void;
}

const defaultValues: TweetsContextModel = {
  tweets: [],
  addTweet: () => {},
};

const TweetsContext = createContext(defaultValues);
export default TweetsContext;
