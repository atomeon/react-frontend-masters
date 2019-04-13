import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import { Pet } from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
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
        // <Pet name="Luna" animal="dog" breed="Ovcharka" />
        // <Pet name="Ralph" animal="dog" breed="Ovcharka" />
        // <Pet name="Buran" animal="dog" breed="Yardy" />
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
