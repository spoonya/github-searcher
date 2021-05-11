import React from 'react';
import { Repository } from '../components';
import ReactPaginate from 'react-paginate';

export default function RepositoryContainer(props) {
  const {
    repos,
    reposCount,
    pageCount,
    onPageChange,
    forcePage,
    range,
  } = props;

  return (
    <Repository>
      <Repository.Title>Repositories ({reposCount})</Repository.Title>
      {repos
        ? repos.map((rep) => (
            <Repository.Item key={rep.id}>
              <Repository.Link href={rep.html_url}>{rep.name}</Repository.Link>
              <Repository.Description>{rep.description}</Repository.Description>
            </Repository.Item>
          ))
        : null}
      <Repository.PaginationContainer>
        <Repository.Range>{`${range.from} - ${range.to} of ${reposCount} ${
          reposCount > 1 ? 'items' : 'item'
        }`}</Repository.Range>
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
  );
}
