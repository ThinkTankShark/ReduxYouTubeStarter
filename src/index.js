import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyDs63T5PvRdQM1aKNEjI0MK6owKDR5Qi0g';


// Create a new document. This component should
// produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//  Take this component's generated HTML and
//  put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

