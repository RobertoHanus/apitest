import { useState } from 'react';

import FetchSearch from './components/FetchSearch';
import InputTerm from './components/InputTerm';
import BottomPagination from './components/BottomPagination';

import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("Peter");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const handleSearchRequest = (inputData) => {
    setSearchTerm(inputData);
  }

  const handlePageChange = (p) => {
    setPage(p);
  }

  const handleListLoaded = (pages_count) => {
    setPages(pages_count);
  }

  const usersPerPage = 5;
  
  return (
    <div>
      <div>
        <InputTerm onInputSearchRequest={handleSearchRequest} />
      </div>
      <div>
        <FetchSearch userLogin={searchTerm} page={page} onListLoaded={handleListLoaded} usersPerPage={usersPerPage}/> 
      </div>
      <div>
        <BottomPagination onPageChange={handlePageChange} pagesCount={pages} usersPerPage={usersPerPage} />
      </div>
    </div>
  );
}

export default App;

