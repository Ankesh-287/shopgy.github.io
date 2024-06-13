import React from 'react';
// import data from './data/data'; 
// import VideoList from './components/VideoList';
// import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Product from './components/Product'
import './App.css';

function App() {
//   const [searchText, setText] = useState('');

  return (
    <div className="App">
    <NavBar/>
    <Product />
      {/* <SearchBar setText={setText} />
      <VideoList videos={data} searchText={searchText} /> */}
    </div>
  );
}

export default App;
