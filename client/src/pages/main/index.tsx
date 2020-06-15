import * as React from "react";
import { SearchField, Title } from "ui";
import { Background, Content, MainPage, SearchBlock } from "./style";
import { LastRecords } from "./last-records";
import { PopularRecords } from "./popular-records";

export const Main: React.FC = () => (
  <MainPage>
    <Background>
      <Content>
        <Title>Learn you fav songs</Title>
        <SearchBlock>
          <SearchField />
        </SearchBlock>
      </Content>
    </Background>
    <Content>
      <LastRecords count={10} />
      <PopularRecords count={10} />
    </Content>
  </MainPage>
);
