import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import { Pet } from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  handleTitleClick() {
    console.log("clicked on a title");
  }
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });
    promise.then(console.log, console.error);
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
    // 		breed: 'prosto'
    // 	}),
    // ])

    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Ovcharka" />
        <Pet name="Ralph" animal="dog" breed="Ovcharka" />
        <Pet name="Buran" animal="dog" breed="Yardy" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
