import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import TweetsContext from "../Context/TweetsContext";
import TweetModel from "../Models/TweetModel";
import tweetsData from "../TempData/Tweets";
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
          <li className="individual-tweet" key={tweet.key}>
            <Link className="link" to={`/${tweet.username}/${tweet.key}`}>
              <img
                src={`${tweet.profileImg}`}
                alt={`${tweet.username}'s profile icon.`}
              />
              <div className="content-container">
                <div className="user-info-container">
                  <div>
                    <h2>{tweet.name}</h2>
                  </div>
                  <span>
                    {tweet.verified && (
                      <i className="fa-solid fa-certificate"></i>
                    )}
                  </span>
                  <div>
                    <h3>@{tweet.username}</h3>
                  </div>
                  <div className="date-dots-container">
                    <p>{tweet.datePosted}</p>
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
                <div className="description-interaction-container">
                  <p className="description">{tweet.tweetDescription}</p>
                  <ul className="interactions-container">
                    <li>
                      <i className="fa-regular fa-comment"></i>
                      <p>{tweet.commentAmount}</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-retweet"></i>
                      <p>{tweet.retweetAmount}</p>
                    </li>
                    <li>
                      <i className="fa-regular fa-heart"></i>
                      <p>{tweet.likes}</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-share"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tweets;
