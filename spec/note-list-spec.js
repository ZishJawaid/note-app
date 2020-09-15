function testingReturnOfNotesInNoteList() {
  var noteList = new NoteList();
  assert.toEqual(noteList.getNotes().join() === ['first note', 'second note'].join())
}

testingReturnOfNotesInNoteList();
