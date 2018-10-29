import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import TopStoriesList from './containers/top-stories-list.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" component={TopStoriesList}/>
          {/* dodati rute kad napravim komponente */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
