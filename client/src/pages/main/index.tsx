import * as React from 'react';
import { useStore } from 'effector-react';

import { SearchField, Title } from 'ui';
import {
  Background,
  Content,
  ContentSongs,
  MainPage,
  SearchBlock,
} from './style';
import { LastRecords } from 'features/songs-list';
import {
  $searchRequest,
  $searchResponse,
  handleChange,
  submitForm,
} from 'features/search';

export const Main: React.FC = () => {
  const song = useStore($searchRequest);
  const searchResult = useStore($searchResponse);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitForm(event);
  };

  return (
    <MainPage>
      <Background>
        <Content>
          <Title>Sing songs</Title>
          <SearchBlock>
            <SearchField
              placeholder="Song name"
              song={song}
              onSubmit={onSubmit}
              handleChange={handleChange}
              searchResult={searchResult}
            />
          </SearchBlock>
        </Content>
      </Background>
      <ContentSongs>
        <LastRecords count={10} />
      </ContentSongs>
    </MainPage>
  );
};
