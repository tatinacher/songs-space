import * as React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  id: string;
  onClick(status: boolean): void;
  status: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ id, onClick, status }) => (
  <Label>
    <Input
      onClick={() => onClick(!status)}
      type="checkbox"
      id={id}
      checked={status}
    />
    <Span />
  </Label>
);

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
`;

export const Span = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--accent);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    content: '';
    position: absolute;
    cursor: pointer;
    top: 4px;
    left: 4px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Span} {
    background-color: var(--switch);
  }
  &:focus + ${Span} {
    box-shadow: 0 0 1px var(--switch);
  }
  &:checked + ${Span}:before {
    transform: translateX(26px);
  }
`;
