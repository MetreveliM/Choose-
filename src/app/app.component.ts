import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Davaleba1';
//masivi
  childs  = ['Mr.IQ', 'Ms.Univers','Bombasto'];
  //
  agreed:number = 0;
//
  disagreed:number = 0;
  //
  onChiled(agreed:boolean) {
    console.log(agreed);

    if(agreed){
      this.agreed++;
    }else{
      this.disagreed++;
    }
  }
}
