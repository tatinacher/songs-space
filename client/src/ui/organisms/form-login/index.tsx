import * as React from 'react';
import styled from 'styled-components';

import { Input, ButtonPrimary } from 'ui/atoms';

export const FormLogin: React.FC = () => (
  <Form>
    <FormInput>
      <label>Username</label>
      <Input name="login" />
    </FormInput>
    <FormInput>
      <label>Password</label>
      <Input type="password" />
    </FormInput>
    <Button>
      <ButtonPrimary>Login</ButtonPrimary>
    </Button>
    <Signup>SingUp</Signup>
  </Form>
);

export const Form = styled.div`
  width: 200px;
  background: #fff;
  padding: 15px;
`;

export const FormInput = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Signup = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
