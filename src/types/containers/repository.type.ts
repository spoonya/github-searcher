import { Repository } from '../api.type';

type RepositoryTypes = {
  id: number;
  repos: Repository[];
  reposCount: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  forcePage: number;
  range: {
    from: number;
    to: number;
  };
};

export default RepositoryTypes;
