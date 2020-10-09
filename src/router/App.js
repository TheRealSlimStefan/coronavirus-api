import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import "../styles/App.css";

class App extends Component {
  state = {
    data: {},
  };

  fetchData = () => {
    // fetch("https://api.covid19api.com/total/dayone/country/south-africa")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.Global,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;

    return (
      <Router>
        <div className="app">
          <Header />
          <Navigation />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <main>
                  <h1>Select an option...</h1>
                </main>
              )}
            />
            <Route
              path="/global"
              component={() => <Main data={data} type="global" />}
            />
            <Route
              path="/location"
              component={() => <Main data={data} type="location" />}
            />
            <Route
              component={() => (
                <main>
                  <h1>This page doesn't exist</h1>
                </main>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
