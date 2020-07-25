import { Component, OnInit } from '@angular/core';
import { TodosDataServiceService } from '../service/data/todos-data-service.service';
export class Employee {
  constructor(
    public id: number,
    public name: string,
    public deptname: string,
    public joiningDate: string
  ) { }
}

export class Student {
  constructor(
    public studentId: number,
    public name: string,
    public course: string
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todo = [
  //  new todos(1, 'Learn smething'),
  //  new todos(2,'learn everything')
  // ]

  employee: Employee[];
  student: Student[];
  constructor(private todoDataService: TodosDataServiceService) { }

  ngOnInit(): void {
    this.todoDataService.retrieveAllEmployees().subscribe(
      (response: any) =>
        { 
          console.log('response body'+response.body);
          this.employee = response;
         }
    );
    this.todoDataService.retrieveAllStudents().subscribe(
      (response: any) =>
        { 
          console.log('response body'+response.body);
          this.student = response;
         }
    );
  //  this.todoDataService.retrieveAllTodos('in28minutes').subscribe(
  //   (response: any) =>
  //   { 
  //     this.employee = response;
  //   }
  //  );

}
}
