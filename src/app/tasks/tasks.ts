import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  @Input() items:{ id: number; title: string; completed: boolean }[] = [];

  @Output() deleteEvent = new EventEmitter<number>();
  onDelete(indx: number) {
    this.deleteEvent.emit(indx);
  }

  @Output() completeEvent = new EventEmitter<number>();
  onComplete(indx: number) {
    this.completeEvent.emit(indx);
  }
}

