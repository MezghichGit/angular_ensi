import { Component, OnInit } from '@angular/core';
import { Cours } from './Models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

 
nom:string="Mohamed Amine MEZGHICH";
ecole:string="ENSI";
etudiants:string[]=["Malek","Soltan","Salma","Sana","Ahmed","Yassine","Mohamed Amine"];
listeCours:Cours[]=[new Cours("RF",30,"MEZGHICH"),new Cours("Frameworks",30,"MEZGHICH"),new Cours("Restauration",30,"MHIRI")];
users:any;
public constructor(private userService:UserService){
console.log("Constructeur")
}
ngOnInit(): void {
  console.log("ngOnInit")
  this.userService.getUsers().subscribe(
    data=>{
      console.log(data);
      this.users = data;
    }
  );
}


display(){
  alert("Hello ENSI");
}
}
