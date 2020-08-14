import React, { Component } from 'react';

import './App.css';
import data from './assets/data.json';
import Avatar from './components/Avatar';

class App extends Component {
  //Create mapping and render the Avatar component
  render() {
    const showData = data.map((avatar) => (
      <Avatar
        size={avatar.size}
        width={avatar.width}
        height={avatar.height}
        radius={avatar.radius}
        image={avatar.image}
        type={avatar.type}
      />
    ));
    return <main>{showData}</main>;
  }
}

export default App;
