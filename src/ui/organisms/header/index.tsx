import * as React from "react";
import { Link } from "react-router-dom";
import { Content, Hide, Item, Menu, MenuBlock, Nav, Form } from "./style";
import { Input, ButtonPrimary } from "ui/atoms";

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
          <Hide>
            <Menu>
              <Link to="/create-song-variation">Create Song Variation</Link>
            </Menu>
            <Menu>
              <Link to="/create-song">Create Song</Link>
            </Menu>
          </Hide>
        </MenuBlock>
        <MenuBlock>
          <Menu>
            <Item>Sign in</Item>
          </Menu>
        </MenuBlock>
      </Content>
      <LoginForm />
    </Nav>
  </>
);

export const LoginForm: React.FC = () => (
  <Form>
    <Input name="login" />
    <Input type="password" />
    <ButtonPrimary>Login</ButtonPrimary>
    <div>SingUp</div>
  </Form>
);
