import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    console.log("clicked on a title");
  }
  render() {
    // return React.createElement('div', {}, [
    // 	React.createElement(
    // 		'h1',
    // 		{ onClick: this.handleTitleClick },
    // 		'Adopt me!'),
    // 	React.createElement(Pet, {

    // 		name: 'Lunak',
    // 		animal: 'dog',
    // 		breed: 'hovenese'
    // 	}),
    // 	React.createElement(Pet, {

    // 		name: 'Tuzik',
    // 		animal: 'dog',
    // 		breed: 'dvornyaga'
    // 	}),
    // 	React.createElement(Pet, {

    // 		name: 'Buran',
    // 		animal: 'dog',
    // 		breed: 'prosto pes'
    // 	}),
    // ])

    return (
      <>
        <h1 onClick={this.handleTitleClick}>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Ovcharka" />
        <Pet name="Ralph" animal="dog" breed="Ovcharka" />
        <Pet name="Buran" animal="dog" breed="Yardy" />
      </>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
