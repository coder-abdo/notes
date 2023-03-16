export type User = {
  id: string;
  name?: string;
  email: string;
  image?: string;
  accounts: Account[];
  sessions: Session[];
  posts: Post[];
  comments: Comment[];
};
export type Post = {
  id: string;
  title: string;
  image?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  user: User;
  userId: string;
  comments: Comment[];
};
type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: string;
  user: User;
};
type Account = {
  id: string;
  userId: string;
  provider: string;
  providerAccountId: string;
  user: User;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
};
type Comment = {
  id: string;
  message: string;
  userId: string;
  postId: string;
};
