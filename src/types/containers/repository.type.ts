import { Repository } from '../api.type';

type TRepository = {
  id: number;
  repos: Repository[] | null;
  reposCount: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  forcePage: number;
  range: {
    from: number;
    to: number;
  };
  isLoading: boolean;
};

export default TRepository;
