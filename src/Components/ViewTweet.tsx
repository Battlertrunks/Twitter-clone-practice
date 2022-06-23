import { useEffect } from "react";
import { useParams } from "react-router";
import "./ViewTweet.scss";

const ViewTweet = () => {
  const user: string | undefined = useParams().user;
  const id: string | undefined = useParams().id;

  return <div className="ViewTweet"></div>;
};

export default ViewTweet;
