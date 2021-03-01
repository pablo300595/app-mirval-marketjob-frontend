import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  cards = [
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'Is responsible for describing a service and the type of context information in a comprehensive, unambiguous manner that is machine interpretable to facilitate automation and human readable to facilitate rapid formulation by users (Sen, 2005). Learn more in: Context-Aware Service Discovery in Ubiquitous Computing', price: 100},
    {title: 'Plumbing Service', description: 'A definition of what a service provides and how it is accessed and used. A service description includes descriptions of the functional and nonfunctional properties of the service, service interfaces, and the legal and technical constraints or rules for its usage. Learn more in: Service Description Ontologies', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100},
    {title: 'Plumbing Service', description: 'At Plumber Service you find the service you need, such as detecting water leaks in copper, PVC and PEC pipes', price: 100}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
