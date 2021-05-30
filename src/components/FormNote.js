import React, { useState } from 'react';

import '../styles/Form.css';
import Notes from './Notes';

export default function Form() { 
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const sendInfo = (e) => {
    e.preventDefault();
    const newNote = {
      id: notes.length + 1,
      title,
      description
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setDescription('');
  };

  const handleDeleteNote = (arr) => {
    setNotes(arr);
  };
  
  return (
    <>
      <form className="container" onSubmit={sendInfo}>
        <div className=" containerForm">
          <div className="containerFormTop">
            <div className="containerInput">
              <label htmlFor="title">Título: </label>
              <input 
                id="title" 
                type="text" 
                placeholder="Escribe aquí" 
                value={title} name="title" 
                onChange={(e) => setTitle(e.target.value)} 
                required
                />
            </div>
          </div>
          <div className="containerInput">
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              placeholder="Escribe tu nota"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              />
          </div>
          <div className="containerInput">
            <button type='submit' className="btn btn-dark">Crear nota</button>
          </div>
        </div>
      </form>
      <Notes dataNotes={notes} handleDeleteNote={handleDeleteNote} />
    </>
  )
}
