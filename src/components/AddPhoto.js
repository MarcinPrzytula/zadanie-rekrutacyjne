import React, { useState } from 'react';

const AddPhoto = props => {
  const id = Math.random().toString(36).substr(2, 9);

  const categories = [
    'movie',
    'game',
    'album',
    'book',
    'face',
    ' fashion',
    'shoes',
    'watch',
    'furniture',
  ];

  const randomCategories = `https://api.lorem.space/image/${
    categories[Math.floor(Math.random() * categories.length)]
  }?w=150&h=220`;

  const photo = {
    name: id,
    id: id,
    date: 'x',
    img: randomCategories,
  };

  return (
    <>
      <button
        onClick={() => {
          props.add([...props.photo, photo]);
        }}
      >
        dodaj zdjecie
      </button>
    </>
  );
};
export default AddPhoto;
