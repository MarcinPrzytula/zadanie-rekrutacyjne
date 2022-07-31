import React, { useState } from 'react';

import Photo from './Photo';

const PhotosList = props => {
  const x = props.photo.map(({ name, id, date, img }) => {
    return (
      <Photo
        name={name}
        id={id}
        date={date}
        img={img}
        delete={props.delete}
        photo={props.photo}
      />
    );
  });

  return <div>{props.photo.length > 0 ? x : 'brak'}</div>;
};

export default PhotosList;
