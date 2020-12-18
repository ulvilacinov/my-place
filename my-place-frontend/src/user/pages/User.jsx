import React from 'react';
import UsersList from '../components/UsersList/UsersList';

const User = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ulvi Lachinov',
      image: 'https://images.gr-assets.com/users/1531816982p6/77442664.jpg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default User;
