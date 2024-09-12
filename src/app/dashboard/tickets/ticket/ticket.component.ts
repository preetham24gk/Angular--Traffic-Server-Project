import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
@Input({required:true}) data! : Ticket;
detailsVisible = false;
@Output() close = new EventEmitter();

onToggleDetails(){
  this.detailsVisible = !this.detailsVisible;
}

onMarkAsCompleted(){
  this.close.emit();
}
}
