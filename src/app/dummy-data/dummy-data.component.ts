import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dummy-data',
  templateUrl: './dummy-data.component.html',
  styleUrls: ['./dummy-data.component.scss']
})
export class DummyDataComponent implements OnInit {
  public users:any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
    this.users = res;
    console.log('users',this.users)
    })
  }

}
