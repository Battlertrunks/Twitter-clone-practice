export default interface TweetModel {
  profileImg: string;
  username: string;
  name: string;
  verified: boolean;
  datePosted: string;
  tweetDescription: string;
  commentAmount: number;
  retweetAmount: number;
  likes: number;
  retweetedBy?: string;
  key?: number;
}
