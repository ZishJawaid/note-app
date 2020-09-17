class NoteListView {

  constructor(noteList){
    this.noteList = noteList    
  }

  viewHTML(){
    let noteArray = this.noteList.getNotes()
    let mapNoteArray = noteArray.map(note => `<ul><li><div>${note}</div></li></ul>`);
        
    return mapNoteArray.join("")
  }     

}
   
