import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attrib-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attrib-dir.component.html',
  styleUrl: './attrib-dir.component.css'
})
export class AttribDirComponent {

  div1BgColor:string="bg-primary";
isDiv2Active:boolean =false;

num1:string="";
num2:string="";

isActive:boolean = false;
studentList:any[] = [
  {studid:1,name:'AA', gender:'male' ,city:'Pune', totalMark:'51', isActive:false},
  {studid:2,name:'BB',gender:'male' ,totalMark:'61',  city:'Gkp', isActive:false},
  {studid:3,name:'CCCC', gender:'female' ,totalMark:'72', city:'Umb', isActive:true},
  {studid:4,name:'DDD', gender:'male' ,city:'Bnz',totalMark:'39',  isActive:false},
  {studid:5,name:'EE', totalMark:'48', gender:'female' ,city:'Lko', isActive:false},
  {studid:6,name:'GGG',totalMark:'40',  gender:'male' ,city:'GTNR', isActive:true},
]

//suppose css is coming from backend in the from of object

customerStyle:any=
{
  'color':'red',
  'background-color':'yellowgreen',
  'width':'200px',
  'height':'200px',
  'border-radius':'50%',
  'text-align':'center',
  
}


  addRedclass(){
    this.div1BgColor = "bg-danger";
  }
  addblueclass(){
    this.div1BgColor ="bg-primary"
  }
  togglediv2class(){
    this.isDiv2Active = !this.isDiv2Active;
  }

}
