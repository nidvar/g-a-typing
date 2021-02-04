import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();

  new_array = this.randomText.split('')

  user_text = ''

  compare(x:string, second:string){

    if(!second){
      return 'pending'
    }
    
    if(x == second){
      return 'correct'
    }else{
      return 'incorrect'
    }
    
  }

  onInput(value:string){
    console.log(value)
    this.user_text = value
  }

  



}