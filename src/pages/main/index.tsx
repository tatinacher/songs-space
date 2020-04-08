import * as React from "react";
import { SearchField, LastPlayed } from "../../ui";
import { MainPage } from "./style";

export const Main: React.FC = () => (
  <MainPage>
    <SearchField />
    <LastPlayed />
  </MainPage>
);
