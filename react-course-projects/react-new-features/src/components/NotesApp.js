import React, { useEffect, useReducer } from 'react';
import NoteList from './NoteList';
import notesReducer from '../reducers/notes';
import AddNoteForm from './AddNoteForm';

import NotesContext from '../context/notes-context';

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(window.localStorage.getItem('notes'));
    dispatch({ type: 'POPULATE_NOTES', notes });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export default NotesApp;
