import { Link } from "react-router-dom";
import TweetModel from "../Models/TweetModel";
import "./Tweet.scss";

interface Prop {
  tweet: TweetModel;
}

const Tweet = ({ tweet }: Prop) => {
  return (
    <li className="Tweet">
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
              {tweet.verified && <i className="fa-solid fa-certificate"></i>}
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
  );
};

export default Tweet;
