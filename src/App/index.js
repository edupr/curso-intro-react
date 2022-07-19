import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// Main App
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
