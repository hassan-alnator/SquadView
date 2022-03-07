import React, { useEffect, useState } from "react";
import { getEmployees } from "./actions/employees";
import { getToken } from "./actions/token";
import { getTeams } from "./actions/teams";
import { getAlliances } from "./actions/alliances";
import { useDispatch } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DragDrop from "./components/DragDrop";
import "./styles/App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      await dispatch(getToken());
      await dispatch(getEmployees());
      await dispatch(getTeams());
      await dispatch(getAlliances());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <DragDrop className="dnd" />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
