import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../../shared/components/FormElements/Input/Input';
import Button from '../../../shared/components/FormElements/Button/Button';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../../shared/util/validators';
import '../PlaceForm.css';
import { useForm } from '../../../shared/hooks/form-hook';

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

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((w) => w.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description. (min. 5 characters)"
        onInput={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
