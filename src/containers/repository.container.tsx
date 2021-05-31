/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { CONFIG } from '../constants/redux.constant';
import { Repository, Loader } from '../components';
import { NoreposContainer } from '.';
import { useTypedSelector, useActions } from '../hooks';

export default function RepositoryContainer() {
  const { user, query } = useTypedSelector(({ user }) => user);
  const { repos, isReposLoading, pageNum } = useTypedSelector(
    ({ repos }) => repos,
  );
  const { fetchRepos, setPage } = useActions();

  const pagesVisited: number = pageNum * CONFIG.reposPerPage;
  const pageCount: number = Math.ceil(
    user ? user.public_repos / CONFIG.reposPerPage : 0,
  );

  const range = {
    from: pagesVisited + 1,
    to:
      user.public_repos < CONFIG.reposPerPage
        ? user.public_repos
        : pagesVisited + CONFIG.reposPerPage > user.public_repos
        ? user.public_repos
        : pagesVisited + CONFIG.reposPerPage,
  };

  function changePage(selectedItem: { selected: number }) {
    setPage(selectedItem.selected);
  }

  useEffect(() => {
    fetchRepos(query, pageNum);
  }, [pageNum]);

  return (
    <>
      {user.id && !repos.length ? (
        <NoreposContainer />
      ) : (
        <>
          {user.id && repos.length ? (
            <Repository>
              <Repository.Title>
                Repositories ({user.public_repos})
              </Repository.Title>
              <Repository.Inner>
                {isReposLoading ? <Loader fullHeight /> : null}
                {repos.map((rep) => (
                  <Repository.Item key={rep.id}>
                    <Repository.Link href={rep.html_url}>
                      {rep.name}
                    </Repository.Link>
                    <Repository.Description>
                      {rep.description}
                    </Repository.Description>
                  </Repository.Item>
                ))}
              </Repository.Inner>
              <Repository.PaginationContainer>
                <Repository.Range>
                  {`${range.from} - ${range.to} of ${user.public_repos} ${
                    user.public_repos > 1 ? 'items' : 'item'
                  }`}
                </Repository.Range>
                <ReactPaginate
                  previousLabel={''}
                  nextLabel={''}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  forcePage={pageNum}
                  breakLabel={'...'}
                  breakClassName={'break'}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  containerClassName={'pagination'}
                  previousLinkClassName={'prevBtn'}
                  nextLinkClassName={'nextBtn'}
                  pageClassName={'pageBtnWrapper'}
                  pageLinkClassName={'pageBtn'}
                  disabledClassName={'paginationDisabled'}
                  activeClassName={'active'}
                />
              </Repository.PaginationContainer>
            </Repository>
          ) : null}
        </>
      )}
    </>
  );
}
