import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.components.scss']
})
export class AppComponent {
  name = 'Hernan';
  age = 30;
  img ='https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/84/1f/9e/841f9eef-28e8-1f5f-7805-350fb2208b5c/logo_photos_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220.png/230x0w.webp';
  btnDisabled = false;
  person ={
    name : 'Hernan',
    age : 30,
    avatar : 'https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/84/1f/9e/841f9eef-28e8-1f5f-7805-350fb2208b5c/logo_photos_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220.png/230x0w.webp'
  }

  toggleMetodo(){
    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name =  element.value;
  }
}
