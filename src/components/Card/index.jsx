import { Link } from 'react-router-dom';
import { Card, Image, Text } from '@mantine/core';
import { images } from '../../config/imagesConfig';
import '../../assets/styles/card.css';

export default function StarShipCard({ image, name, id, model, hyperdrive_rating }) {
  return (
    <Link style={{ textDecoration: 'none', cursor: 'pointer' }} to={`/starships/${id}`}>
      <Card shadow="sm" p="xl" component="div">
        <Card.Section>
          <Image src={images[image]} height={300} alt="No way!" />
        </Card.Section>

        <Text weight={600} size="xl" mt="md">
          Name : {name}
        </Text>
        <Text mt="xs" color="dimmed" size="md">
          Model : {model}
        </Text>
        <Text mt="xs" color="dimmed" size="md">
          Hyper Drive Rating : {hyperdrive_rating}
        </Text>
      </Card>
    </Link>
  );
}
