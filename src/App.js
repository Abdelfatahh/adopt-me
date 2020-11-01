import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt ME!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanes" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockteil",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));