function testingReturnOfNotesInNoteList() {
  var noteList = new NoteList();
  assert.toEqual(noteList.getNotes().join() === ['first note', 'second note'].join());
}

function testingNewNoteIsStoredInNoteList() {
  var noteList = new NoteList();
  noteList.addNote('testing note creation');
  var note = noteList.getNotes()[noteList.getNotes().length-1];
  assert.toEqual(noteList.getNotes().includes(note));
  assert.toEqual(note instanceof Note);
}



testingReturnOfNotesInNoteList();
testingNewNoteIsStoredInNoteList();
