import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  //Create some constants(useState) to manage title & content.
  //Pass the text  of title & content back to app component
  //App component should have array of notes.  Render separate notes component for each array
  // Delete note need to get a callback from note component. Same filter function can be used to delete

  //useState constants for Array of notes

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter(
        (prevNote, indexPrevNote) => indexPrevNote !== noteId
      );
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
