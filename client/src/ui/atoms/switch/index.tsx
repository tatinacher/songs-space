import * as React from "react";

interface SwitchProps {
  status: boolean;
  onClick(status: boolean): void;
  text: string;
  id: string;
}
export const Switch: React.FC<SwitchProps> = ({
  status,
  onClick,
  text,
  id
}) => (
  <div>
    <input
      onClick={() => onClick(status)}
      type="checkbox"
      id={id}
      checked={status}
    />{" "}
    {text}
  </div>
);
