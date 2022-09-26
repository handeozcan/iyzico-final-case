import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Center,
  SegmentedControl,
  Group,
  useMantineColorScheme
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import ScrollToTop from 'react-scroll-to-top';
import '../../assets/styles/StarShips.css';
import Layout from '../../layouts/Layout';
import StarShipCard from '../../components/Card';
import { fetchStarShips } from '../../api/fetchStarShips';
import { getId } from '../../helpers/urlParser';
import Error from '../Error';
import Loading from '../Loading';

function StarShips() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [disable, setDisable] = useState(false);
  const [segmentValue, setSegmentValue] = useState(false);

  const handleGetStarShips = () => {
    setIsLoading(true);
    fetchStarShips(page)
      .then((res) => {
        if (res.results.length > 0) {
          setData([...data, ...res.results]);
          if (res.next) {
            setPage(page + 1);
          }
          if (!res.next) {
            setDisable(true);
          }
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  };

  useEffect(() => {
    handleGetStarShips();
  }, []);

  // fot theming
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return error ? (
    <Error />
  ) : loadingPage ? (
    <Loading />
  ) : (
    <Layout>
      <Group position="right">
        <SegmentedControl
          style={{
            backgroundColor: 'gray'
          }}
          value={segmentValue}
          onChange={setSegmentValue}
          data={[
            { label: 'Load More Active with Search', value: true },
            { label: 'Load More Inactive with Search', value: false }
          ]}
        />
      </Group>
      <Input
        style={{
          width: '300px',
          margin: '30px auto 0 auto'
        }}
        placeholder="Search Starships"
        icon={<IconSearch />}
        size="md"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />

      <Center>
        <div className="starships_main_layout">
          {data.map((starship) => {
            if (
              starship.name.toLowerCase().includes(search.toLowerCase()) ||
              starship.model.toLowerCase().includes(search.toLowerCase())
            ) {
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
            }
          })}
        </div>
      </Center>

      <ScrollToTop smooth />
      {segmentValue ? (
        <Center>
          <Button
            loading={isLoading}
            variant="filled"
            style={{
              background: dark ? '#ADB5BD' : '#373A40'
            }}
            loaderPosition="left"
            disabled={disable}
            onClick={() => handleGetStarShips(page)}>
            {disable ? 'Nothing more to load' : 'Load More'}
          </Button>
        </Center>
      ) : search.length > 0 ? null : (
        <Center>
          <Button
            loading={isLoading}
            variant="filled"
            style={{
              background: dark ? '#ADB5BD' : '#373A40'
            }}
            loaderPosition="left"
            disabled={disable}
            onClick={() => handleGetStarShips(page)}>
            {disable ? 'Nothing more to load' : 'Load More'}
          </Button>
        </Center>
      )}
    </Layout>
  );
}

export default StarShips;
