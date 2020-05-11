import * as React from "react";
import { SearchField } from "ui";
import { Background, Content, MainPage, SearchBlock } from "./style";
import { LastRecords } from "./last-records";

export const Main: React.FC = () => (
  <MainPage>
    <Background>
      <SearchBlock>
        <SearchField />
      </SearchBlock>
    </Background>
    <Content>
      <LastRecords count={10} />
    </Content>
  </MainPage>
);
