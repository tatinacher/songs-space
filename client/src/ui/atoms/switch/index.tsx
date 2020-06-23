import * as React from "react";
import styled from "styled-components";

interface SwitchProps {
  status: boolean;
  onClick(status: boolean): void;
  id: string;
}
export const Switch: React.FC<SwitchProps> = ({ status, onClick, id }) => (
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
  width: 60px;
  height: 34px;
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
    content: "";
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
    width: 26px;
    height: 26px;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Span} {
    background-color: #2196f3;
  }
  &:focus + ${Span} {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + ${Span}:before {
    transform: translateX(26px);
  }
`;
