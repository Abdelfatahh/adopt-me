import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
import searchParams from "./searchParams"
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt ME!"),
  //   React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanes" }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockteil",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};

render(<App />, document.getElementById("root"));
