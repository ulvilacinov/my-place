import React from 'react';
import PlaceList from '../components/PlaceList/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scraper in the world!',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1272532349151072262/kBEZiWIQ_400x400.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7491245,
      lng: -73.9906096,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scraper in the world!',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipMQzyDd2Sr-0-26hdNmJ4dAryDGrylhIJ2w9YND=w408-h510-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7491245,
      lng: -73.9906096,
    },
    creator: 'u2',
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
