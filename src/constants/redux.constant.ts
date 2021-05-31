type Config = {
  readonly reposPerPage: number;
  readonly sort: string;
  readonly loaderUnmountDelay: number;
};

const CONFIG: Config = {
  reposPerPage: 4,
  sort: 'updated_at',
  loaderUnmountDelay: 200,
};

export { CONFIG };
