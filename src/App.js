import React from "react";
import Profile from "./components/Profile";
import CalendarHeatmap from "./components/CalendarHeatmap";
import TopLists from "./components/TopLists";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Profile />
      <CalendarHeatmap />
      <TopLists />
    </div>
  );
}

export default App;
