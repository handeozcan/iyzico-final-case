import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button, useMantineColorScheme } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { images } from '../../config/imagesConfig';
import Layout from '../../layouts/Layout';
import '../../assets/styles/cardDetails.css';
import { fetchSingleStarShip } from '../../api/fetchSingleStarShip';
import Error from '../Error';
import Loading from '../Loading';

function StarShipDetail() {
  // its gives current page url
  let { id } = useParams();
  const history = useNavigate();
  const { status, error, data } = useQuery(['starship', id], () => fetchSingleStarShip(id));

  if (status === 'loading') return <Loading />;
  if (status === 'error') return <Error />;
  if (status !== 'success') return <Error />;
  if (error !== null) return <Error />;

  // fot theming
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const handleBack = () => {
    history('/starships');
  };
  return (
    <Layout>
      <div>
        <Button
          mb={20}
          color={dark ? 'gray' : 'dark'}
          leftIcon={<IconArrowLeft />}
          variant="outline"
          onClick={handleBack}>
          Go Back
        </Button>
        <section>
          <div className="containerMain">
            <div style={{ backgroundImage: `url(${images[id]})` }} className="background-img">
              <div className="box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <p>Name : {data.data.name} </p>
                  <p>Model : {data.data.model} </p>
                  <p>Manufacturer : {data.data.manufacturer} </p>
                  <p>Max Atmosphering Speed : {data.data.max_atmosphering_speed} </p>
                  <p>Crew : {data.data.crew} </p>
                  <p>Passengers : {data.data.passengers} </p>
                  <p>Cargo Capacity : {data.data.cargo_capacity} </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default StarShipDetail;
