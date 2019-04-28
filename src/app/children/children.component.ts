import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  // 组件name值允许外部输入
  @Input() name:string = "alice";

  constructor() { }

  ngOnInit() {
  }

}
