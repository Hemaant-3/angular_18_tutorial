import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { TaskComponent } from './component/task/task.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirComponent } from './component/directive/structural-dir/structural-dir.component';
import { AttribDirComponent } from "./component/directive/attrib-dir/attrib-dir.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, StructuralDirComponent, AttribDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
