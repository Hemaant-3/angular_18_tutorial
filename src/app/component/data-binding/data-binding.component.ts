import { Component, NgModule, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName: string = "Angular 18";
inputType = "checkbox"
value: number = 123; //  even you add into double/single quotes it acts as number

myclassname = "bg-primary";
isIndian: boolean=false;
stateName = "Goa";

firstName = signal("Hemant Kumar");


showAlert(message:string){
  alert(message);
}

changeCourseName(){
  this.courseName = "react js";
  console.warn(this.isIndian);
  this.firstName.set("Monu Kumar Chaudhary");
}



}
