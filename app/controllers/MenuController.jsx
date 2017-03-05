import React from 'react';

class MenuController extends React.Component {

  constructor(props) {
    super(props);
     this.render = this.render.bind(this);
  }

  render () {
    return (
      <div>
        Menu 1 | Menu 2 | Menu 3 | Menu 4 | Menu 5
      </div>
    );
  }

}

export default MenuController;
