import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@mantine/core';
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

  const handleBack = () => {
    history('/starships');
  };
  return (
    <Layout>
      <div>
        <Button
          mb={20}
          leftIcon={<IconArrowLeft />}
          variant="white"
          color="gray"
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
                  <h1>{data.data.name} </h1>
                  <h2>Model : {data.data.model} </h2>
                  <h2>{data.data.manufacturer} </h2>
                  <h2>{data.data.max_atmosphering_speed} </h2>
                  <h2>{data.data.crew} </h2>
                  <h2>{data.data.passengers} </h2>
                  <h2>{data.data.cargo_capacity} </h2>
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
