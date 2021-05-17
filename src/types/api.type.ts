export type User = {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
  html_url: string;
  public_repos: number;
  followers: number | string;
  following: number | string;
};

export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  pushed_at: string;
};
