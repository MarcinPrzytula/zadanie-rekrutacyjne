import React, { useState } from 'react';

import AddPhoto from './components/AddPhoto';
import PhotosList from './components/PhotosList';

import './style/App.scss';

function App() {
  const [photo, setPhoto] = useState([]);

  return (
    <>
      <div>Galeria zdjęć z możliwością oceny</div>
      <AddPhoto add={setPhoto} photo={photo} />
      <PhotosList delete={setPhoto} photo={photo} />
    </>
  );
}

export default App;
