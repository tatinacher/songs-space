import * as React from 'react';
import { FormLogin } from 'ui';
import styled from 'styled-components';

export const Login: React.FC = () => (
  <LoginPage>
    <FormLogin />
  </LoginPage>
);

export const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
