
import React from 'react';
import MainController from './../controllers/MainController.jsx';
import MenuController from './../controllers/MenuController.jsx';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
        <h1> App Component </h1> <hr />
        <MenuController />
        <MainController />
      </div>
    );
  }

}

export default AppComponent;
