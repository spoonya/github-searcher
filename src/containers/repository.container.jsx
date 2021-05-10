import React from 'react';
import { Repository } from '../components';
import ReactPaginate from 'react-paginate';

export default function RepositoryContainer(props) {
  const { repos, reposCount } = props;

  return (
    <Repository>
      <Repository.Title>Repositories ({reposCount})</Repository.Title>
      {repos.map((item) => (
        <Repository.Item key={item.id}>
          <Repository.Link href={item.html_url}>{item.name}</Repository.Link>
          <Repository.Description>{item.description}</Repository.Description>
        </Repository.Item>
      ))}
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
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
    </Repository>
  );
}
