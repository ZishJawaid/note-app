class NoteList {

  constructor() {
    this.notes = ['first note', 'second note'];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(new Note(note));
  }
}
