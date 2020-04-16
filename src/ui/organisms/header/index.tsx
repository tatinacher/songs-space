import * as React from "react";
import { Link } from "react-router-dom";
import { Nav, Menu } from "./style";
import styled from "styled-components";

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
    <Hide>
      <Menu>
        <Link to="/create-song-variation">Create Song Variation</Link>
      </Menu>
      <Menu>
        <Link to="/create-song">Create Song</Link>
      </Menu>
    </Hide>
  </Nav>
);

export const Hide = styled.div`
  display: none;
`;
