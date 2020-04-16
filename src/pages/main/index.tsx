import * as React from "react";
import { SearchField } from "../../ui";
import { MainPage } from "./style";
import { LastRecords } from "./last-records";

export const Main: React.FC = () => (
  <MainPage>
    <SearchField />
    <LastRecords count={10} />
  </MainPage>
);
