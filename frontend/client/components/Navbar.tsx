import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import {NavLink} from "react-router-dom";

export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink className="nav-link"  to={"/"} >List of People</NavLink>
        <NavLink className="nav-link"  to={"/new"} >Create new entry</NavLink>
      </Toolbar>
    </AppBar>
  )
};