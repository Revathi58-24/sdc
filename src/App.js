import React from 'react';
import './Header.css'; // Import CSS file for styling (create Header.css in the same directory as this component if not already existing)
import Header from './Header';
import Banner from './Banner';
import HomePage from './Home';
const App = () => {
  return (
   <div>
    <Header/>
    <Banner/>
    <HomePage/>
    </div>
  );
}

export default App;
