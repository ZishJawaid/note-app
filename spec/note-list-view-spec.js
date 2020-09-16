function oneNoteReturnOfHTMLString() {

  var noteList = new NoteList
  noteList.addNote('Note1')
  var noteListView = new NoteListView(noteList)
  assert.toEqual(noteListView.viewHTML() === "<ul><li><div>Note1</div></li></ul>" )
    
}
function severalNotesReturnOfHTMLString() {

  var noteList = new NoteList
  noteList.addNote('Note1')
  noteList.addNote('Note2')
  noteList.addNote('Note3')
  var noteListView = new NoteListView(noteList)
  assert.toEqual(noteListView.viewHTML() === "<ul><li><div>Note1</div></li></ul><ul><li><div>Note2</div></li></ul><ul><li><div>Note3</div></li></ul>")

}


oneNoteReturnOfHTMLString()
severalNotesReturnOfHTMLString()
