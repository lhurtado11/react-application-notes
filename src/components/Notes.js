import '../styles/Notes.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Notes({dataNotes, handleDeleteNote}) {
  const [edit, setEdit] = useState(undefined);
  const [color, setColor] = useState('#feffbf');
  const [titleNote, setTitleNote] = useState('');
  const [descriptionNote, setDescriptionNote] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target;
    if( name === "titleNoteEdit" ) {
      setTitleNote(value);
    } else if (name === "descriptionNoteEdit") {
      setDescriptionNote(value);
    }
  };

  const handleUpdate = (event, elem) => {
    event.preventDefault();
    const index = dataNotes.indexOf(elem);
    dataNotes[index].title = titleNote;
    dataNotes[index].description = descriptionNote;
    setEdit(undefined);
  };

  const handleEdit = (event, index, elem) => {
    event.preventDefault();
    setTitleNote(elem.title);
    setDescriptionNote(elem.description);
    setEdit(index);
  };

  const handleDelete = (event, index) => {
    event.preventDefault();
    const deleteNote = dataNotes.filter(( note, i ) => i !== index);
    handleDeleteNote(deleteNote);
  };

  return (
    <div className="container-fluid">
      <div className="container containerNotes">
        <div className="containerInput-select">
          <label htmlFor="color">Color: </label>
          <select 
            name="color" 
            style={{ background: color }} 
            onChange={(e) => setColor(e.target.value)}
          >  
            {/* <option style={{background:"#ff7eb9"}} value="#ff7eb9"></option>
            <option style={{background:"#ff65a3"}} value="#ff65a3"></option>
            <option style={{background:"#7afcff"}} value="#7afcff"></option>
            <option style={{background:"#feff9c"}} value="#feff9c"></option>
            <option style={{background:"#fff740"}} value="#fff740"></option> */}

            <option style={{background:"#feffbf"}} value="#feffbf"></option>
            <option style={{background:"#fcdcdf"}} value="#fcdcdf"></option>
            <option style={{background:"#f498c2"}} value="#f498c2"></option>
            <option style={{background:"#ffdac1"}} value="#ffdac1"></option>
            <option style={{background:"#d9ffdf"}} value="#d9ffdf"></option>
            <option style={{background:"#bdefef"}} value="#bdefef"></option>
            <option style={{background:"#83d9dc"}} value="#83d9dc"></option>


          </select>
        </div>
        <div className="row"> 
          {dataNotes.map((elem, index) => 
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 containerNotes-columns" key={elem.id}>
              {edit === index ? (                  
                <div className="cardNote" style={{background: color}}>
                  <form onSubmit={(event) => handleUpdate(event, elem)}>
                    <div className="cardNote-form">
                      <div>
                        <input 
                          id="title-note" 
                          type="text"
                          name="titleNoteEdit"
                          value={titleNote}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          id="description-note"
                          type="text"
                          name="descriptionNoteEdit"
                          value={descriptionNote}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="cardNote-button-edit">
                      <button
                        type="submit" 
                        className="text-success"
                      >
                        <FontAwesomeIcon icon={faCheck}/>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="cardNote" style={{ background: color }} >
                  <div className="cardNote-text">
                    <h4 title={elem.title}>{elem.title}</h4>
                    <p>{elem.description}</p>
                  </div>
                  <div className="cardNote-button">
                    <button
                      title="editar"
                      className="text-dark"
                      onClick={(event) => handleEdit(event, index, elem)} 
                      disabled={edit !== undefined ? true : false}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                      title="eliminar"
                      className="text-dark"
                      onClick={(event) => handleDelete(event, index)}
                      disabled={edit !== undefined ? true : false}
                    >
                      <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>    
  )
}
 
 
