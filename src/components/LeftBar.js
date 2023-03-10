import React from "react";
import { Link } from "react-router-dom";
import "./leftBar.css";
import List from "./List";
export default function LeftBar() {
  return (
    <div className="leftBar-container">
      <div className="mt-5">
        <List>
          <Link to="/users">Użytkownicy</Link>
        </List>
        <List>
          <Link to="/administratorPanel">Panel admina</Link>
        </List>
        <List>
          <Link to="/create">Utwórz</Link>
        </List>
        <List>
          <Link to="/workHours">Godziny pracy</Link>
        </List>
        <List>
          <Link to="/login">Wyloguj się</Link>
        </List>
      </div>
    </div>
  );
}