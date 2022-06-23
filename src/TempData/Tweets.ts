import TweetModel from "../Models/TweetModel";
import profileImg1 from "../Images/profile-img.jpeg";

const tweets: TweetModel[] = [
  {
    profileImg: profileImg1,
    username: "gavinszczesniak",
    name: "Gavin Szczesniak",
    verified: false,
    datePosted: "May 23",
    tweetDescription: "Hello everyone, I hope your day is going wonderful!",
    commentAmount: 5,
    retweetAmount: 3,
    likes: 24,
    key: 1,
  },
  {
    profileImg: profileImg1,
    username: "gavinszczesniak",
    name: "Gavin Szczesniak",
    verified: true,
    datePosted: "Apr 4, 2021",
    tweetDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam maiores voluptas, eaque possimus eos odio minus dicta, cumque perferendis, mollitia nisi ullam debitis. Incidunt ab pariatur, tempora dolor blanditiis maxime, itaque inventore in cupiditate reprehenderit cum provident. Voluptate accusantium quos fuga ea enim deserunt id, voluptatum labore exercitationem odio.",
    commentAmount: 2,
    retweetAmount: 20,
    likes: 57,
    key: 2,
  },
  {
    profileImg: profileImg1,
    username: "gavinszczesniak",
    name: "Gavin Szczesniak",
    verified: false,
    datePosted: "Jul 16, 2021",
    tweetDescription: "It is my Birthday yo!!",
    commentAmount: 20,
    retweetAmount: 75,
    likes: 155,
    key: 3,
  },
  {
    profileImg: profileImg1,
    username: "gavinszczesniak",
    name: "Gavin Szczesniak",
    verified: false,
    datePosted: "Sep 7, 2020",
    tweetDescription:
      "How does everyone feel about having a public transit meeting?",
    commentAmount: 20,
    retweetAmount: 75,
    likes: 155,
    key: 4,
  },
];

export default tweets;
