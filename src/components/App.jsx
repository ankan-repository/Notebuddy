import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
  

/*  the code below can be simplified by ES6 arrow function 
 function App(){   
   return (
       <div>
       <Header/>  
     {notes.map(nodeitem => {
      <Note 
      key= {nodeitem.key}
      title= {nodeitem.title} 
      content={nodeitem.content} 
      />
       <Footer/>                  
       </div>
   );
  } */  
  

// function createnode(nodeitem){
//   return <Note 
//   key= {nodeitem.key}
//   title= {nodeitem.title} 
//     content={nodeitem.content} />;
//  }  //HERE Note IS A CUSTOM Component SO IT IS WRITTEN IN RETURN FUNCTION ABOVE
 
 
 function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

