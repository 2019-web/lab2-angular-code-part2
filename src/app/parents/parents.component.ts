import { Component, OnInit, ComponentFactory,ViewContainerRef,ViewChild, OnDestroy,ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
import { ComponentRef } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit, OnDestroy {


  componentRef: ComponentRef<ChildrenComponent>;

  @ViewChild("addChild", { read: ViewContainerRef }) addChild: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    console.log(this.componentFactoryResolver);

    console.log(this.addChild);

    this.createComponent('alice');
    this.createComponent('bob');
    this.createComponent('tom');
  }

  createComponent(name: string) {
    this.addChild.clear();
    let componentFactory : ComponentFactory<ChildrenComponent>= this.componentFactoryResolver.resolveComponentFactory(ChildrenComponent);

    console.log(componentFactory); 
    this.componentRef= this.addChild.createComponent(componentFactory);
    this.componentRef.instance.name=name;
    console.log(this.componentRef);

  }
  ngAfterViewInit() {
    console.log(this.addChild);
  }

  ngOnDestroy() {

  }
}
