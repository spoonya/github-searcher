type User = {
  readonly id: number;
  readonly avatar_url: string;
  readonly name: string;
  readonly login: string;
  readonly html_url: string;
  readonly public_repos: number;
  readonly followers: number;
  readonly following: number;
};

type Repository = {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly html_url: string;
  readonly pushed_at: string;
};

export type { User, Repository };
