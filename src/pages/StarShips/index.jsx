import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import Layout from '../../layouts/Layout';
import StarShipCard from '../../components/Card';
import { fetchStarShips } from '../../api/fetchStarShips';
import { getId } from '../../helpers/urlParser';

function StarShips() {
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
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <Layout>
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
                gridTemplateColumns: 'auto auto',
                gridGap: '200px',
                padding: '10px',
                marginTop: '200px'
              }}>
              {group.data.results.map((starship) => (
                <div key={starship.name}>
                  <StarShipCard
                    name={starship.model}
                    id={getId(starship.url)}
                    image={getId(starship.url)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </Layout>
  );
}

export default StarShips;
