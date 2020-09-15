import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

const ENDPOINT = "http://localhost:5500";

class App extends Component {
  state = {
    hosts: {
      active: [],
      inactive: [],
    },
    areas: [],
  };

  componentDidMount() {
    fetch(`${ENDPOINT}/areas`)
      .then((resp) => resp.json())
      .then((areas) => this.setState({ areas: areas }));
    fetch(`${ENDPOINT}/hosts`)
      .then((resp) => resp.json())
      .then((hosts) =>
        this.setState({
          hosts: {
            active: hosts.filter((host) => !!host.active),
            inactive: hosts.filter((host) => !host.active),
          },
        })
      );
  }

  render() {
    return (
      <Segment id="app">
        <WestworldMap
          hosts={this.state.hosts.active}
          areas={this.state.areas}
        />
        <Headquarters hosts={this.state.hosts.inactive} />
      </Segment>
    );
  }
}

export default App;
