import * as React from "react";
import { SearchField } from "../../ui";
import { MainPage, SearchBlock } from "./style";
import { LastRecords } from "./last-records";

export const Main: React.FC = () => (
  <MainPage>
    <SearchBlock>
      <SearchField />
    </SearchBlock>
    <LastRecords count={10} />
  </MainPage>
);
