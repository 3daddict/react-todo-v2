import 'materialize-css/dist/css/materialize.min.css'
import "../assets/css/app.scss";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import AddItem from './add_items';
import List from './list'
import dummyListData from '../dummy_data/list_data';

class App extends Component {

  state = {
      list: []
  }

  componentDidMount() {
      this.getListData();
  }

  getListData() {
      //Call server to get data

      this.setState({
          list: dummyListData
      });
  }

  render() {
      const {list} = this.state;

      return (
          <div className="container">
              <h1 className="center">Todo App</h1>
              <AddItem />
              <List data={list} />
          </div>
      );
  }
}

export default App;
