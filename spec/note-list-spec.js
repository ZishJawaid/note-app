function testingNewNoteIsStoredInNoteList() {
  var noteList = new NoteList();
  noteList.addNote('testing note creation');
  var returnedNote = noteList.getNotes()[noteList.getNotes().length-1];
  assert.toEqual(returnedNote === 'testing note creation');
  assert.toEqual(noteList.getNotes().includes(returnedNote));
  
}

testingNewNoteIsStoredInNoteList();
