import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import TweetsContext from "../Context/TweetsContext";
import TweetModel from "../Models/TweetModel";
import "./ViewTweet.scss";

const ViewTweet = () => {
  const user: string | undefined = useParams().user;
  const id: number | undefined = parseInt(useParams().id!);
  const navigate = useNavigate();

  const [tweet, setTweet] = useState<TweetModel>();

  const { tweets } = useContext(TweetsContext);

  useEffect(() => {
    const viewTweet: TweetModel | undefined = tweets.find((tweet) => {
      return tweet.key === id && tweet.username === user;
    });
    console.log(viewTweet);
    if (viewTweet) setTweet(viewTweet);
    else navigate("/home");
  }, []);

  return (
    <section className="ViewTweet">
      <div className="profile-container">
        <div className="name-pic-container">
          <img
            src={tweet?.profileImg}
            alt={`${tweet?.username}'s profile icon.`}
          />
          <div>
            <h2>
              {tweet?.name}{" "}
              {tweet?.verified && <i className="fa-solid fa-certificate"></i>}
            </h2>
            <h3>@{tweet?.username}</h3>
          </div>
        </div>
        <i className="fa-solid fa-ellipsis more-btn"></i>
      </div>
      <p>{tweet?.tweetDescription}</p>
      <div>
        <p>3:48 PM</p>
        <p>{tweet?.datePosted}</p>
      </div>
      <ul>
        <li>
          <p>{tweet?.retweetAmount} Retweets</p>
        </li>
        <li>
          <p>3 Quote Tweets</p>
        </li>
        <li>
          <p>{tweet?.likes}</p>
        </li>
      </ul>
      <ul>
        <li>
          <button>
            <i className="fa-regular fa-comment"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fa-solid fa-retweet"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
        </li>
        <li>
          <button>
            <i className="fa-solid fa-share"></i>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ViewTweet;
