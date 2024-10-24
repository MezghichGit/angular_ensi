import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
nom:string="Mohamed Amine MEZGHICH";

display(){
  alert("Hello ENSI");
}
}
