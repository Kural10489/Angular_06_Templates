import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  title = 'App component';
  
  attributeVal='btn' //Attribute binding
  hide=false;
  
  name:String='kural';
  img='https://www.google.com/url?sa=i&url=https%3A%2F%2Fangular.io%2Fpresskit&psig=AOvVaw1K-rw3HpGVnbXSgxyEfn4M&ust=1671191045822000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCUx_bF-_sCFQAAAAAdAAAAABAE';
  event(myevent:any) {
    console.log(myevent);
  }

//Template Statement
  numberArray=['Goku','Vegeta','Gohan']
  getDbzCharecters(){
    return this.numberArray
  }

  toggle(){ //Template statement
    this.hide=!this.hide
    console.log(this.hide)
  }


public date=new Date();
public currency=34332;
public Object={name:'kural',age:21};
public arr=[1,23,4,2];
public age:number=0;
 public chr:string="k";
}
