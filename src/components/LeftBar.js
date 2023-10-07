import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./leftBar.css";
import List from "./List";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuthContext } from "../hooks/useAuthContext";

export default function LeftBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isHamBar, setIsHamBar] = useState(false);
  const { user } = useAuthContext();

  const handleHamChange = (e) => {
    setIsHamBar(!isHamBar);
  };

  return (
    <>
      {!isDesktop && (
        <nav className="ham-bar  navbar-dark">
          <button className="ham-btn navbar-toggler" onClick={(e) => handleHamChange(e)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={!isHamBar ? "leftBar-container-smaller" : "leftBar-container-bigger"}>
            {isHamBar && (
              <>
                {user && (user.uid === "4W9EZuIVmGX67mWx1w48G4ASTq32" || user.uid === "UmZ0GSiCgnNvrJQkeL7xpLgJhYJ3") && (
                  <>
                    <List>
                      <Link to="/users">Użytkownicy</Link>
                    </List>
                    <List>
                      <Link to="/toAdd">Projekty do dodania</Link>
                    </List>
                    <List>
                      <Link to="/history">Historia</Link>
                    </List>
                  </>
                )}

                <List>
                  <Link to="/create">Utwórz</Link>
                </List>
                <List>
                  <Link to="/workHours">Godziny pracy</Link>
                </List>

                <List>
                  <Link to="/login">Wyloguj się</Link>
                </List>
              </>
            )}
          </div>
        </nav>
      )}
      {isDesktop && (
        <div className="leftBar-container">
          <div className="mt-5 pt-5">
            {user && (user.uid === "4W9EZuIVmGX67mWx1w48G4ASTq32" || user.uid === "UmZ0GSiCgnNvrJQkeL7xpLgJhYJ3") && (
              <>
                <List>
                  <Link to="/users">Użytkownicy</Link>
                </List>
                <List>
                  <Link to="/toAdd">projekty do dodania</Link>
                </List>
                <List>
                  <Link to="/history">Historia</Link>
                </List>
              </>
            )}

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
      )}
    </>
  );
}
