import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Input, Button, Center } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import Layout from '../../layouts/Layout';
import StarShipCard from '../../components/Card';
import { fetchStarShips } from '../../api/fetchStarShips';
import { getId } from '../../helpers/urlParser';
import Error from '../Error';
import Loading from '../Loading';

function StarShips() {
  const [value, setValue] = useState('');
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery(['starships'], fetchStarShips, {
      getNextPageParam: (lastGroup, allGroups) => {
        const morePagesExist = lastGroup?.data.results.length === 10;
        if (!morePagesExist) {
          return;
        }
        return allGroups.length + 1;
      }
    });

  return status === 'loading' ? (
    <Loading />
  ) : status === 'error' ? (
    <Error />
  ) : error !== null ? (
    <Error />
  ) : (
    <Layout>
      <Input
        style={{
          width: '300px',
          margin: '30px auto 0 auto'
        }}
        placeholder="Search Starships"
        icon={<IconSearch />}
        size="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      {data.pages.map((group, i) => {
        return (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            key={i}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '400px 400px ',
                gridGap: '150px',
                padding: '10px',
                marginTop: '100px'
              }}>
              {group.data.results.map((starship) => {
                return (
                  <div key={starship.name}>
                    <StarShipCard
                      hyperdrive_rating={starship.hyperdrive_rating}
                      model={starship.model}
                      name={starship.name}
                      id={getId(starship.url)}
                      image={getId(starship.url)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <Center mt={30}>
        <Button
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage && true}
          disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </Button>
      </Center>
    </Layout>
  );
}

export default StarShips;
