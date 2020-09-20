import * as React from 'react';
import { SearchField, Title } from 'ui';
import {
  Background,
  Content,
  ContentSongs,
  MainPage,
  SearchBlock,
} from './style';
import { LastRecords } from './last-records';
import { PopularRecords } from './popular-records';

export const Main: React.FC = () => (
  <MainPage>
    <Background>
      <Content>
        <Title>Sing songs</Title>
        <SearchBlock>
          <SearchField placeholder="Song name" />
        </SearchBlock>
      </Content>
    </Background>
    <ContentSongs>
      <LastRecords count={10} />
    </ContentSongs>
  </MainPage>
);
