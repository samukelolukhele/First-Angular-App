import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + '/' + task.id);
  }
}
