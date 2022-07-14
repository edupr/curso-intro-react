import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setsearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Buscar..."
      value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>,
  ];
}

export { TodoSearch };
