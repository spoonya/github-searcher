import React from 'react';
import { Repository } from '../components';
import ReactPaginate from 'react-paginate';

export default function RepositoryContainer() {
  return (
    <Repository>
      <Repository.Title>Repositories (249)</Repository.Title>
      <Repository.Item>
        <Repository.Link href="#">repo-name</Repository.Link>
        <Repository.Description>Lorem, ipsum dolor.</Repository.Description>
      </Repository.Item>
      <Repository.Item>
        <Repository.Link href="#">repo-name</Repository.Link>
        <Repository.Description>Lorem, ipsum dolor.</Repository.Description>
      </Repository.Item>
      <Repository.Item>
        <Repository.Link href="#">repo-name</Repository.Link>
        <Repository.Description>Lorem, ipsum dolor.</Repository.Description>
      </Repository.Item>
      <Repository.Item>
        <Repository.Link href="#">repo-name</Repository.Link>
        <Repository.Description>Lorem, ipsum dolor.</Repository.Description>
      </Repository.Item>
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
