import ReactPaginate from 'react-paginate';

import { Repository, Loader } from '../components';
import { NoreposContainer } from '.';
import TRepository from '../types/containers/repository.type';

export default function RepositoryContainer(props: TRepository) {
  const {
    id,
    repos,
    reposCount,
    pageCount,
    onPageChange,
    forcePage,
    range,
    isLoading,
  } = props;

  return (
    <>
      {id && !repos?.length ? (
        <NoreposContainer />
      ) : (
        <>
          {id && repos?.length ? (
            <Repository>
              <Repository.Title>Repositories ({reposCount})</Repository.Title>
              <Repository.Inner>
                {isLoading ? <Loader fullHeight /> : null}
                {repos!.map((rep) => (
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
                  {`${range.from} - ${range.to} of ${reposCount} ${
                    reposCount > 1 ? 'items' : 'item'
                  }`}
                </Repository.Range>
                <ReactPaginate
                  previousLabel={''}
                  nextLabel={''}
                  pageCount={pageCount}
                  onPageChange={onPageChange}
                  forcePage={forcePage}
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
