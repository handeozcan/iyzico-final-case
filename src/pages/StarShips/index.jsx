import React from 'react';
import { Grid } from '@mantine/core';
import Layout from '../../layouts/Layout';
import StarShipCard from '../../components/Card';

function StarShips() {
  return (
    <Layout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Grid>
          <Grid.Col span={4}>
            <StarShipCard />
          </Grid.Col>
        </Grid>
      </div>
    </Layout>
  );
}

export default StarShips;
