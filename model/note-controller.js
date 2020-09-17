class NoteController {

  constructor(noteList){

    this.noteList = noteList
    this.noteList.addNote('Favourite drink: Lassi')
    this.noteListView = new NoteListView(this.noteList)

  }

  getHTML(){
  
    document.getElementById('app').innerHTML = this.noteListView.viewHTML()
   
     }


}
let note = new NoteList()
let noteController = new NoteController(note)
noteController.getHTML()
    