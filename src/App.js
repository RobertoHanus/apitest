import { useState } from 'react';

import FetchSearch from './components/FetchSearch';
import InputTerm from './components/InputTerm';

import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("Peter");

  const handleSearchRequest = (inputData) => {
    setSearchTerm(inputData);
  }
  
  return (
    <div>
      <div>
        <InputTerm onInputSearchRequest={handleSearchRequest} />
      </div>
      <div>
        <FetchSearch userLogin={searchTerm} />
      </div>
    </div>
  );
}

export default App;

