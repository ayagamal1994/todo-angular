import { Component } from '@angular/core';
import { Tasks } from '../tasks/tasks';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-todo',
  imports: [Tasks, AddTask],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})


export class Todo {

  alltasks:{id:number; title:string; completed:boolean}[]=[];
  currentId = 0;
  
  receiveData(event:string){
  const task={
  id: ++this.currentId,
  title: event,
  completed: false
  }

  this.alltasks.push(task)
  console.log(this.alltasks)
  }

  deleteItem(indx:number){
    this.alltasks.splice(indx,1)
  }

  completeItem(indx:number){
    this.alltasks[indx].completed = true;
    console.log("cccc")
  }

  }
