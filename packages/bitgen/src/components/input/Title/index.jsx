import React from 'react';

const TitleInput = ({ title, setTitle }) => {
  const updateTitle = (event) => {
    setTitle(event.target.value);
  }

  
  return (
    <>
      <label for="title">Title:</label>
      <input id="title" type="text" value={title} onChange={updateTitle} />
    </>
  )
}

export default TitleInput;