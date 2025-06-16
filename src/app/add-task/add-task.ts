import { Component, EventEmitter, Output, output} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask {
  inputTask="";
   @Output() dataEvent = new EventEmitter<string>()
    sendData(){
      this.dataEvent.emit(this.inputTask);
      this.inputTask = ""
  }
}
