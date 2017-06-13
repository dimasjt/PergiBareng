import React, { Component } from 'react';

import routes from './routes';

export default class Main extends Component {
  render() {
    return (
      <div>{routes()}</div>
    );
  }
};
