import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  courseImg="../assets/images/course.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
