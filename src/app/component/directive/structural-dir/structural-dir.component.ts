import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
isDiv1Visibile: boolean=false;

isToogle:boolean = true;

isActive:boolean=false;
num1:string="";
num2:string="";
selectedState:string="";
cityArray:string[] =['Pune','Mumbai','Goa','Delhi'];

studentList:any[] = [
  {studid:1,name:'AA', city:'Pune', isActive:false},
  {studid:2,name:'BB', city:'Gkp', isActive:false},
  {studid:3,name:'CCCC', city:'Umb', isActive:true},
  {studid:4,name:'DDD', city:'Bnz', isActive:false},
  {studid:5,name:'EE', city:'Lko', isActive:false},
  {studid:6,name:'GGG', city:'GTNR', isActive:true},
]

show(){
  this.isDiv1Visibile=true;
}

hide(){
  this.isDiv1Visibile = false;
}


toogle(){
  this.isToogle = !this.isToogle;

//   if(this.isDiv1Visibile==true){
//   this.isDiv1Visibile = false;
// } else{
//   this.isDiv1Visibile = true;
// }
}
}