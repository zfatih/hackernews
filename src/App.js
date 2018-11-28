import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import TopStoriesList from './containers/top-stories-list.js';
import Navbar from './components/Navbar.js';
import NewestStoriesList from './containers/newest-stories-list.js';
import NewCommentsList from './containers/new-comments-list.js';
import ShowList from './containers/show-list';
import AskList from './containers/ask-list';
import JobList from './containers/job-list';
import ItemPage from "./containers/item-page";

class App extends Component {
  componentDidMount(){
    var element = ReactDOM.findDOMNode(this.refs.dropdown)
    $(element).ready(function() {
      $('.brand-logo').click(function() {
        $('.nav-wrapper ul li').siblings('li').removeClass('active');
      });
      $('.nav-wrapper ul li').click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={TopStoriesList}/>
          <Route exact path="/newest" component={NewestStoriesList}/>
          <Route exact path="/newcomments" component={NewCommentsList}/>
          <Route exact path="/show" component={ShowList}/>
          <Route exact path="/ask" component={AskList}/>
          <Route exact path="/jobs" component={JobList}/>
          <Route exact path="/Item/:item_id" component={ItemPage}/>
          {/* dodati rute kad napravim komponente */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
