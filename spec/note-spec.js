function testingNoteCreation() {
    var note = new Note("test text");
    assert.toEqual(note.readNote() === "test text")
}
testingNoteCreation()
