import React from 'react';

const Photo = props => {
  const { name, date, img, id } = props;

  return (
    <>
      <div>
        <div>{name}</div>
        <div>{date}</div>
        <img src={img} alt="random " />
        <button
          onClick={() => {
            props.delete(props.photo.filter(item => item.id !== id));
          }}
        >
          usun zdjecie
        </button>
      </div>
    </>
  );
};

export default Photo;
