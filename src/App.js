import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      id: 1,
      key: 1,
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      id: 2,
      key: 2,
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, {
      id: 3,
      key: 3,
      name: "Doink",
      animal: "Cat",
      breed: "Mix"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
