import * as React from "react";
import { Link } from "react-router-dom";
import { Content, Hide, Item, Menu, MenuBlock, Nav } from "./style";

export const Header: React.FC = () => (
  <>
    <Nav>
      <Content>
        <MenuBlock>
          <Menu>
            <Link to="/">
              <span role="img" aria-label="guitar">
                🎸
              </span>
            </Link>
          </Menu>
          <Menu>
            <Link to="/bands">Bands</Link>
          </Menu>
          <Menu>
            <Link to="/song">Songs</Link>
          </Menu>
          <>
            <Menu>
              <Link to="/create-song-variation">Create Song Variation</Link>
            </Menu>
            <Menu>
              <Link to="/create-song">Create Song</Link>
            </Menu>
          </>
        </MenuBlock>
        <MenuBlock>
          <Menu>
            <Item to="/login">Sign in</Item>
          </Menu>
        </MenuBlock>
      </Content>
    </Nav>
  </>
);
