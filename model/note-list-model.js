class NoteList {

  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(new Note(note).readNote());
  }
}
