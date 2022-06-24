export default interface Comments {
  profileImg: string;
  username: string;
  name: string;
  datePosted: string;
  description: string;
  comments?: Comments[];
  retweets: number;
  likes: number;
  key: number;
}
