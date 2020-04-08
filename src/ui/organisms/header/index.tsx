import * as React from "react";
import { Link } from "react-router-dom";
import { Nav, Menu } from "./style";

export const Header: React.FC = () => (
  <Nav>
    <Menu>
      <Link to="/">
        <span role="img" aria-label="guitar">
          🎸
        </span>
      </Link>
    </Menu>
    <Menu>
      <Link to="/bands">Band</Link>
    </Menu>
    <Menu>
      <Link to="/song">Song</Link>
    </Menu>
    <Menu>
      <Link to="/create-song">Create Song</Link>
    </Menu>
  </Nav>
);
