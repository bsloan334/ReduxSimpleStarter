import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBVOsicS539KVy-tPwlNrPPxrlH97e3M7I';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));