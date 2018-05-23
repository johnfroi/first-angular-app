import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tr =[
       {fname:"John Froi",mname:"Adera",lname:"Dejaresco"},
       {fname:"Matt",mname:"Mahinay",lname:"Sante"},
       {fname:"Lenold",mname:"Escano",lname:"cano"},
  ];
  addPerson(){
    if(confirm("Are you sure you want to add it?")){
      this.tr.push({fname:"Lenold1",mname:"Escano1",lname:"cano1"});
    }
  }
}
