import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  name :string='kural';
  nameArray=[{name:'Kural',domain:'Angular'},{name:'Person2',domain:'React'}];

  arr=[
  {
    'type':'Frontend',
    'course':[
      {'name':'Angular'},
      {'name':'React JS'},
      {'name':'Vue Js'}
    ]
  },
  {
    'type':'Backend',
    'course':[
      {'name':'Python'},
      {'name':'Java'},
      {'name':'C++'}
    ]
  }
]

isLoggedIn:boolean=false;
isExistingUser:boolean=true;

Login(){
  this.isLoggedIn=true;
}
Logout(){
  this.isLoggedIn=false;
}
}
