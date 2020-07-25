import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, Student } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodosDataServiceService {
  constructor(private http: HttpClient) { }

  // retrieveAllTodos(username: any){
  //   return this.http.get<Todo[]>(`http://localhost:8089/users/${username}/todos`);
  // }

  retrieveAllEmployees() {
    console.log('making rest get call');
    return this.http.get<Employee[]>('http://localhost:8088/emp/employees');
  }

  retrieveAllStudents() {
    console.log('making rest get call');
    return this.http.get<Student[]>('http://localhost:8088/students/students');
  }
}